import type { CertificationStatus, ResearchSourceBasis, SanghiDimensions, SanghiProfile } from '../types/sanghi';
import { makeHardenedBatchFilm, type BatchRiskFinding } from './hardenedBatch50Factory';

type Lane = 'rashtra' | 'social' | 'history' | 'sacred' | 'family' | 'neutral' | 'mixed' | 'mixedSacred';
type RiskKind = 'history' | 'community' | 'sacred' | 'factual';

interface Film50ERow {
  title: string;
  status: CertificationStatus;
  lane: Lane;
  sourceBasis: ResearchSourceBasis;
  understanding: string;
  qualification: string;
  fact: string;
  evidenceUrl: string;
  evidenceSource: string;
  evidenceClaim: string;
  risk?: RiskKind;
}

const RELEASE_INDEX = 'https://en.wikipedia.org/wiki/List_of_Hindi_films_of_2026';

const certifiedDimensions: Record<Exclude<Lane, 'neutral' | 'mixed' | 'mixedSacred'>, SanghiDimensions> = {
  rashtra: { dharma: 4, civilizationalContinuity: 3, rashtra: 5, itihasa: 3, parampara: 2, localRoots: 3, raksha: 5, socialDharma: 4, sacredRegard: 2, contemptRisk: 0 },
  social: { dharma: 4, civilizationalContinuity: 2, rashtra: 2, itihasa: 2, parampara: 2, localRoots: 4, raksha: 3, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
  history: { dharma: 4, civilizationalContinuity: 4, rashtra: 4, itihasa: 5, parampara: 3, localRoots: 5, raksha: 4, socialDharma: 4, sacredRegard: 2, contemptRisk: 0 },
  sacred: { dharma: 5, civilizationalContinuity: 5, rashtra: 2, itihasa: 4, parampara: 5, localRoots: 5, raksha: 4, socialDharma: 4, sacredRegard: 5, contemptRisk: 0 },
  family: { dharma: 4, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 4, localRoots: 4, raksha: 3, socialDharma: 5, sacredRegard: 2, contemptRisk: 0 },
};

const neutralDimensions: SanghiDimensions = {
  dharma: 3, civilizationalContinuity: 2, rashtra: 1, itihasa: 1, parampara: 2,
  localRoots: 3, raksha: 2, socialDharma: 3, sacredRegard: 1, contemptRisk: 0,
};

const mixedDimensions: SanghiDimensions = {
  dharma: 3, civilizationalContinuity: 2, rashtra: 2, itihasa: 2, parampara: 2,
  localRoots: 3, raksha: 3, socialDharma: 4, sacredRegard: 1, contemptRisk: 1,
};

const mixedSacredDimensions: SanghiDimensions = {
  dharma: 3, civilizationalContinuity: 3, rashtra: 1, itihasa: 2, parampara: 3,
  localRoots: 4, raksha: 2, socialDharma: 4, sacredRegard: 3, contemptRisk: 1,
};

const tagsByLane: Record<Lane, string[]> = {
  rashtra: ['Rashtra', 'Raksha', 'Public duty'],
  social: ['Social Dharma', 'Justice', 'Dignity'],
  history: ['Itihasa', 'Historical memory', 'Local roots'],
  sacred: ['Sacred Regard', 'Parampara', 'Dharma'],
  family: ['Family', 'Dharma', 'Social Dharma'],
  neutral: ['Contemporary India', 'Narrative', 'Social texture'],
  mixed: ['Dharma', 'Social Dharma', 'Contested'],
  mixedSacred: ['Sacred Regard', 'Social Dharma', 'Contested'],
};

function dimensionsFor(row: Film50ERow): SanghiDimensions {
  if (row.status === 'neutral') return neutralDimensions;
  if (row.status === 'mixed' || row.status === 'not-certified') {
    return row.lane === 'mixedSacred' ? mixedSacredDimensions : mixedDimensions;
  }
  if (row.lane === 'neutral' || row.lane === 'mixed' || row.lane === 'mixedSacred') {
    return { ...neutralDimensions, dharma: 4, socialDharma: 4 };
  }
  return certifiedDimensions[row.lane];
}

function risksFor(row: Film50ERow): BatchRiskFinding[] | undefined {
  switch (row.risk) {
    case 'history':
      return [{
        id: 'historical-claims',
        summary: 'Real history, biography or public events are materially present; scene-level chronology, dialogue and attribution require separation from dramatization.',
        evidenceIndexes: [0, 1],
        materiality: 'high',
      }];
    case 'community':
      return [{
        id: 'community-contempt',
        summary: 'The film advances a broad community-facing claim; the audit retains a material risk that individual wrongdoing is generalized to a religious community.',
        evidenceIndexes: [0, 1],
        materiality: 'high',
      }];
    case 'sacred':
      return [{
        id: 'sacred-religious-valence',
        summary: 'Living sacred practice or Hindu mythic material is central enough that reverence, critique and exploitation must be distinguished title-specifically.',
        evidenceIndexes: [0, 1],
        status: 'ambiguous',
        materiality: 'medium',
      }];
    case 'factual':
      return [{
        id: 'quantitative-claims',
        summary: 'The issue-driven narrative makes causal or public-health claims that require evidence beyond dramatic assertion before being treated as factual.',
        evidenceIndexes: [0, 1],
        materiality: 'high',
      }];
    default:
      return undefined;
  }
}

function make50EFilm(row: Film50ERow): SanghiProfile {
  const interpretation = row.status === 'certified'
    ? `Under the declared Bharatiya/Hindu-civilizational lens, ${row.understanding.toLowerCase()} The supported values are directional enough for certification.`
    : row.status === 'mixed'
      ? `The film contains meaningful Bharatiya-facing values or social concerns, but ${row.qualification.charAt(0).toLowerCase()}${row.qualification.slice(1)} The competing signals remain material.`
      : `The film contains recognisably Indian social or cultural material, but ${row.qualification.charAt(0).toLowerCase()}${row.qualification.slice(1)} Neutral avoids manufacturing a directional verdict.`;

  return makeHardenedBatchFilm({
    title: row.title,
    year: 2026,
    language: 'Hindi',
    status: row.status,
    sourceBasis: row.sourceBasis,
    dimensions: dimensionsFor(row),
    tags: tagsByLane[row.lane],
    reasons: [row.understanding, row.qualification],
    evidence: [
      {
        kind: 'review',
        source: row.evidenceSource,
        claim: row.evidenceClaim,
        url: row.evidenceUrl,
      },
      {
        kind: 'review',
        source: '2026 Hindi-film release index',
        claim: `${row.title} is listed in the 2026 Hindi release calendar used for tranche scoping and release/language cross-checking.`,
        url: RELEASE_INDEX,
      },
    ],
    filmUnderstanding: row.understanding,
    researchFocus: `${row.title} Hindi 2026 source adaptation history religion caste community sacred valence representation factual accuracy strongest counter-reading`,
    redTeamChallenge: row.qualification,
    fact: row.fact,
    interpretation,
    intent: 'The verdict applies the declared Bharatiya lens to the released film. It does not convert fictional characters into claims about whole communities, certify dramatized scenes as documentary fact, or infer creator intent beyond supported evidence.',
    risks: risksFor(row),
  });
}

const rows: Film50ERow[] = [
  { title: 'Border 2', status: 'certified', lane: 'rashtra', sourceBasis: 'history',
    understanding: 'A 1971-war sequel built around Indian soldiers, sacrifice and defence of the country.',
    qualification: 'Its patriotic frame is strong, but war-film compression and star-led spectacle should not be confused with a documentary reconstruction.',
    fact: 'The film presents military service and sacrifice as duties owed to the nation.',
    evidenceUrl: 'https://www.indiatoday.in/movies/reviews/story/border-2-review-emotions-stars-and-a-war-drama-that-blends-legacy-with-gloss-sunny-deol-varun-dhawan-2856750-2026-01-23', evidenceSource: 'India Today — Border 2 review', evidenceClaim: 'patriotism, sacrifice and service in a 1971-war drama' },
  { title: 'Rahu Ketu', status: 'neutral', lane: 'neutral', sourceBasis: 'original-fiction',
    understanding: 'A fantasy-comedy in which a magical notebook brings the bumbling Rahu and Ketu to life and sends them against a drug mafia.',
    qualification: 'Astrological names and fantasy devices are cultural texture, but the story does not sustain a sacred or civilizational claim.',
    fact: 'The film uses Rahu-Ketu names inside broad fantasy-comedy rather than a doctrinal religious narrative.',
    evidenceUrl: 'https://www.rottentomatoes.com/m/rahu_ketu_2026', evidenceSource: 'Rotten Tomatoes — Rahu Ketu', evidenceClaim: 'a Hindi fantasy-comedy about a magical notebook and a drug-mafia chase' },
  { title: 'Happy Patel: Khatarnak Jasoos', status: 'neutral', lane: 'neutral', sourceBasis: 'original-fiction',
    understanding: 'A self-aware spy spoof following an enthusiastic but incompetent agent through a Goa-centred mission.',
    qualification: 'Indian masala references and spy parody are comic grammar rather than a sustained Bharatiya value proposition.',
    fact: 'The film is an absurdist espionage comedy and parody of spy-film conventions.',
    evidenceUrl: 'https://www.rottentomatoes.com/m/happy_patel_khatarnak_jasoos', evidenceSource: 'Rotten Tomatoes — Happy Patel', evidenceClaim: 'a clumsy spy whose missions trigger comic consequences' },
  { title: 'Safia/Safdar', status: 'neutral', lane: 'family', sourceBasis: 'original-fiction',
    understanding: 'A Hindi drama about a daughter who disguises herself to protect her ill father’s salon from a local moneylender.',
    qualification: 'Family duty and local livelihood are positive, but the available record is too narrow for a stronger civilizational verdict.',
    fact: 'The central conflict is a daughter protecting a family livelihood under local economic pressure.',
    evidenceUrl: 'https://www.zee5.com/hi/embed/0-0-1z5895178', evidenceSource: 'ZEE5 — Safia/Safdar', evidenceClaim: 'the released Hindi film synopsis about Safia protecting her father’s salon' },
  { title: 'Bihu Attack', status: 'certified', lane: 'rashtra', sourceBasis: 'original-fiction',
    understanding: 'An Assam-set anti-terror thriller in which a former soldier tries to rehabilitate militants and then protects a Bihu gathering from an attack.',
    qualification: 'The security plot is formulaic, but protection of civilians, reintegration and defence of a living regional festival create clear Raksha and Rashtra signals.',
    fact: 'The film centres an ex-serviceman confronting an infiltration plot targeting a Bihu festival.',
    evidenceUrl: 'https://timesofindia.indiatimes.com/bollywood/bihu-attack/amp_movie_review/126614260.cms', evidenceSource: 'Times of India — Bihu Attack review', evidenceClaim: 'the Assam anti-terror plot and threatened Bihu festival' },
  { title: 'Mayasabha - The Hall of Illusion', status: 'neutral', lane: 'neutral', sourceBasis: 'original-fiction',
    understanding: 'A psychological thriller set in a decaying Mumbai theatre where family wounds, greed and deception converge around hidden wealth.',
    qualification: 'The title’s epic allusion does not by itself make the film a Mahabharata adaptation or sacred statement.',
    fact: 'The film is a contemporary psychological thriller about greed, memory and deception in an old theatre.',
    evidenceUrl: 'https://in.bookmyshow.com/movies/yava/mayasabha-the-hall-of-illusion/ET00472022', evidenceSource: 'BookMyShow — Mayasabha', evidenceClaim: 'the released Hindi psychological-thriller synopsis' },
  { title: 'Mardaani 3', status: 'certified', lane: 'social', sourceBasis: 'original-fiction',
    understanding: 'A police crime drama continuing Shivani Shivaji Roy’s fight against exploitation and violent crime.',
    qualification: 'The film’s moral centre is protection of vulnerable victims and accountable policing; franchise heroisation is a craft caveat, not a reversal of that duty ethic.',
    fact: 'The third Mardaani film is a Hindi police thriller led by Shivani Shivaji Roy.',
    evidenceUrl: 'https://www.rottentomatoes.com/m/mardaani_3', evidenceSource: 'Rotten Tomatoes — Mardaani 3', evidenceClaim: 'the crime-thriller release and critical reception' },
  { title: 'Vadh 2', status: 'mixed', lane: 'mixed', sourceBasis: 'original-fiction',
    understanding: 'A slow-burn crime thriller concerned with murder, concealment, punishment and the moral boundaries of justice.',
    qualification: 'Its interest in accountability is genuine, but the narrative is designed around a perfect-crime problem and morally compromised choices.',
    fact: 'The film is a fictional crime-and-punishment thriller rather than a straightforward justice parable.',
    evidenceUrl: 'https://www.rottentomatoes.com/m/vadh_2', evidenceSource: 'Rotten Tomatoes — Vadh 2', evidenceClaim: 'the sequel’s crime-and-punishment framing' },
  { title: 'Tu Yaa Main', status: 'neutral', lane: 'neutral', sourceBasis: 'original-fiction',
    understanding: 'A survival thriller about two influencers whose adventure in the backwaters becomes a fight against environmental hazards and a predator.',
    qualification: 'Survival, cooperation and courage are present, but the available evidence does not establish a directional civilizational or sacred thesis.',
    fact: 'The film is a contemporary survival-romance thriller driven by an animal threat.',
    evidenceUrl: 'https://www.rottentomatoes.com/m/tu_yaa_main', evidenceSource: 'Rotten Tomatoes — Tu Yaa Main', evidenceClaim: 'the backwater survival-thriller synopsis' },
  { title: 'O\'Romeo', status: 'mixed', lane: 'mixed', sourceBasis: 'original-fiction',
    understanding: 'A gangster-romance and revenge drama about a violent man struggling with obsession, love and his own capacity for harm.',
    qualification: 'The self-reform impulse has Dharmic value, but coercive romance, gang violence and revenge keep the moral direction contested.',
    fact: 'The film is fictional gangster melodrama centred on crime, romance and revenge.',
    evidenceUrl: 'https://www.indiatoday.in/movies/reviews/story/o-romeo-movie-review-shahid-kapoor-vishal-bhardwaj-fail-to-recreate-haider-kaminey-magic-2867694-2026-02-13', evidenceSource: 'India Today — O\'Romeo review', evidenceClaim: 'the gangster-romance, revenge and self-destructive protagonist' },
  { title: 'Shatak: Sangh Ke 100 Varsh', status: 'certified', lane: 'history', sourceBasis: 'history',
    understanding: 'A historical-social film tracing a century of the Rashtriya Swayamsevak Sangh from its founding to its present influence.',
    qualification: 'Within the declared Bharatiya lens, sustained treatment of a long-running Hindu-national social institution is a civilizational-history signal, while factual selectivity must remain visible.',
    fact: 'The film explicitly presents a hundred-year institutional history of the RSS.',
    evidenceUrl: 'https://in.bookmyshow.com/movies/bois/shatak-sangh-ke-100-varsh/ET00481738', evidenceSource: 'BookMyShow — Shatak', evidenceClaim: 'the film’s stated century-long RSS historical scope', risk: 'history' },
  { title: 'Assi', status: 'certified', lane: 'social', sourceBasis: 'original-fiction',
    understanding: 'A courtroom and investigative drama built around sexual-assault cases and the social machinery that allows repeated violence.',
    qualification: 'Its focus on responsibility, institutional failure and protection of women is a direct Social Dharma concern.',
    fact: 'The film treats sexual violence through investigation, courts and social accountability rather than as spectacle alone.',
    evidenceUrl: 'https://www.rottentomatoes.com/m/assi', evidenceSource: 'Rotten Tomatoes — Assi', evidenceClaim: 'the courtroom drama and its responsibility-and-accountability themes' },
  { title: 'Do Deewane Seher Mein', status: 'neutral', lane: 'neutral', sourceBasis: 'original-fiction',
    understanding: 'A Mumbai relationship drama about two socially awkward adults navigating insecurity, self-acceptance and an arranged-marriage encounter.',
    qualification: 'Marriage and Indian metropolitan life are present, but the film’s thesis remains primarily personal and universal rather than civilizationally directional.',
    fact: 'The film is a contemporary Hindi romance about vulnerability and self-acceptance.',
    evidenceUrl: 'https://www.rottentomatoes.com/m/do_deewane_seher_mein', evidenceSource: 'Rotten Tomatoes — Do Deewane Seher Mein', evidenceClaim: 'the Mumbai romance and arranged-marriage context' },
  { title: 'Bharat Desh Hai Mera', status: 'certified', lane: 'history', sourceBasis: 'history',
    understanding: 'A political-social drama about Pakistan-occupied Kashmir, Kashmiri Pandit displacement, loss and national memory.',
    qualification: 'The subject creates strong Itihasa, Local Roots and Rashtra signals, but title-specific factual claims need separation from dramatization and promotional framing.',
    fact: 'The film presents PoK conflict and Kashmiri Pandit exile as continuing historical memory.',
    evidenceUrl: 'https://in.bookmyshow.com/movies/mumbai/bharat-desh-hai-mera/et00510319', evidenceSource: 'BookMyShow — Bharat Desh Hai Mera', evidenceClaim: 'the PoK and Kashmiri Pandit displacement premise', risk: 'history' },
  { title: 'The Kerala Story 2: Goes Beyond', status: 'mixed', lane: 'mixed', sourceBasis: 'mixed-unknown',
    understanding: 'An issue-driven drama following women whose romantic relationships become coercive and are framed through religious conversion anxiety.',
    qualification: 'Protection of women and concern about coercion are valid Social Dharma questions, but the film’s broad framing of Muslim men as an organised conversion threat creates a material community-generalisation risk.',
    fact: 'The sequel uses fictional parallel stories to advance a wider social claim about romance, conversion and control.',
    evidenceUrl: 'https://www.indiatoday.in/movies/reviews/story/the-kerala-story-2-movie-review-one-community-one-villain-one-agenda-2875921-2026-02-28', evidenceSource: 'India Today — The Kerala Story 2 review', evidenceClaim: 'the film’s broad community framing and conversion thesis', risk: 'community' },
  { title: 'Accused', status: 'neutral', lane: 'neutral', sourceBasis: 'original-fiction',
    understanding: 'A contemporary thriller about a prominent gynaecologist facing serious allegations while her wife tries to determine what happened.',
    qualification: 'The film’s ambiguity about guilt, reputation and institutional judgment raises Social Dharma questions without a specifically Bharatiya directional thesis.',
    fact: 'The film is fictional and treats accusation, perception and truth as deliberately ambiguous.',
    evidenceUrl: 'https://www.rottentomatoes.com/m/accused_2026', evidenceSource: 'Rotten Tomatoes — Accused', evidenceClaim: 'the allegations, marriage and ambiguity at the centre of the thriller' },
  { title: 'Subedaar', status: 'certified', lane: 'family', sourceBasis: 'original-fiction',
    understanding: 'A retired soldier estranged from his daughter is forced into a new conflict that tests family responsibility and the discipline of his former service.',
    qualification: 'The film’s protection and duty ethic survives its conventional vigilante-action form, though civilian violence lowers Dharma.',
    fact: 'The protagonist is a fictional retired subedaar whose military identity shapes a family-protection conflict.',
    evidenceUrl: 'https://www.rottentomatoes.com/m/subedaar', evidenceSource: 'Rotten Tomatoes — Subedaar', evidenceClaim: 'the retired soldier, daughter and civilian-war premise' },
  { title: 'Charak: Fair of Faith', status: 'mixed', lane: 'mixedSacred', sourceBasis: 'original-fiction',
    understanding: 'A social thriller about faith, blind faith and the human costs surrounding a religious fair and systems of exploitation.',
    qualification: 'Critiquing exploitation committed in the name of faith can serve Social Dharma, but the title’s treatment of living ritual practice requires care so that institutional abuse is not conflated with sacred tradition itself.',
    fact: 'The film is a Hindi social thriller explicitly contrasting faith with blind faith.',
    evidenceUrl: 'https://www.district.in/movies/charak-fair-of-faith-movie-tickets-in-durg-MV211773', evidenceSource: 'District — Charak', evidenceClaim: 'critical-review summaries describing faith versus blind faith', risk: 'sacred' },
  { title: 'Jab Khuli Kitaab', status: 'neutral', lane: 'family', sourceBasis: 'fiction-adaptation',
    understanding: 'An elderly Uttarakhand couple’s fifty-year marriage is shaken by a confession, leading to anger, divorce talk, memory and eventual questions of forgiveness.',
    qualification: 'Its family and marriage texture is meaningful, but the film is primarily an intimate relationship drama rather than a broad civilizational thesis.',
    fact: 'The film adapts Saurabh Shukla’s play and centres late-life marriage, betrayal and forgiveness.',
    evidenceUrl: 'https://www.indiatoday.in/entertainment/ott/story/jab-khuli-kitaab-review-pankaj-kapur-leads-tender-story-of-love-and-its-complexities-2879931-2026-03-10', evidenceSource: 'India Today — Jab Khuli Kitaab review', evidenceClaim: 'the five-decade marriage, confession and forgiveness arc' },
  { title: 'Bhooth Bangla', status: 'neutral', lane: 'mixedSacred', sourceBasis: 'original-fiction',
    understanding: 'A horror-comedy drawing on Indian mythology, black magic and references associated with the Vedas and Mahabharata.',
    qualification: 'Mythological borrowing is substantial, but available evidence does not yet support treating genre use of occult and epic material as either reverence or contempt.',
    fact: 'The film is a Hindi supernatural comedy using Indian mythological and occult motifs.',
    evidenceUrl: 'https://www.rottentomatoes.com/m/bhooth_bangla', evidenceSource: 'Rotten Tomatoes — Bhooth Bangla', evidenceClaim: 'the mythology and black-magic premise', risk: 'sacred' },
  { title: 'Ginny Wedss Sunny 2', status: 'neutral', lane: 'family', sourceBasis: 'original-fiction',
    understanding: 'A small-town romantic comedy involving a wrestler, marriage expectations and competing ideas of modernity and conservatism.',
    qualification: 'Marriage and local social expectation are central, but the film’s confused gender politics do not resolve into a strong civilizationally affirmative thesis.',
    fact: 'The sequel is contemporary fiction about romance, marriage and social expectations.',
    evidenceUrl: 'https://www.indiatoday.in/movies/reviews/story/ginny-wedss-sunny-2-review-avinash-tiwary-medha-shankr-film-regressive-2900922-2026-04-24', evidenceSource: 'India Today — Ginny Wedss Sunny 2 review', evidenceClaim: 'the arranged-marriage and social-expectation framing' },
  { title: 'Ek Din', status: 'neutral', lane: 'neutral', sourceBasis: 'original-fiction',
    understanding: 'A clean youthful romance in which a magical opportunity gives a reserved young man one day with the woman he loves.',
    qualification: 'Restraint and sincerity distinguish the romance, but the story remains a universal love fantasy rather than a civilizational argument.',
    fact: 'The film is a Hindi romantic fantasy centred on memory, affection and one fleeting day.',
    evidenceUrl: 'https://www.rottentomatoes.com/m/ek_din', evidenceSource: 'Rotten Tomatoes — Ek Din', evidenceClaim: 'the one-day romance premise and release information' },
  { title: 'Krishnavataram Part 1: The Heart', status: 'certified', lane: 'sacred', sourceBasis: 'folklore-sacred-tradition',
    understanding: 'A devotional mythological drama following Lord Krishna from Vrindavan toward Dwarka and Kurukshetra, including his relationships with Radha, Rukmini and Bhama.',
    qualification: 'Its direct, reverential retelling of Krishna’s sacred story creates maximum Sacred Regard and Parampara signals, while adaptation choices remain non-canonical cinematic interpretation.',
    fact: 'The film explicitly dramatizes Lord Krishna’s sacred narrative as a devotional saga.',
    evidenceUrl: 'https://timesofindia.indiatimes.com/entertainment/hindi/krishnavataram-part-1-the-heart/movie-review/130889178.cms', evidenceSource: 'Times of India — Krishnavataram review', evidenceClaim: 'the Krishna devotional narrative and mythological scope' },
  { title: 'Hanuman Ansh', status: 'certified', lane: 'sacred', sourceBasis: 'biopic',
    understanding: 'A devotional biographical drama inspired by Neem Karoli Baba, emphasising compassion, seva, faith and the search for divinity.',
    qualification: 'The film’s spiritual message is directly affirmative and reverential, while miracles and private episodes should not be treated as independently verified biography.',
    fact: 'The film presents Neem Karoli Baba’s life through a devotional biographical frame centred on seva and compassion.',
    evidenceUrl: 'https://timesofindia.indiatimes.com/entertainment/hindi/movie-reviews/hanuman-ansh/movie-review/134391674.cms', evidenceSource: 'Times of India — Hanuman Ansh review', evidenceClaim: 'the Neem Karoli Baba spiritual journey and seva-focused message', risk: 'history' },
  { title: 'Daadi Ki Shaadi', status: 'certified', lane: 'family', sourceBasis: 'original-fiction',
    understanding: 'A family dramedy in which an elderly matriarch’s decision to remarry forces her estranged children to confront loneliness, companionship and their own neglect.',
    qualification: 'Respect for elders is not the same as controlling them; the film’s strongest Social Dharma signal is recognising an older woman’s dignity and agency inside family life.',
    fact: 'The story is fictional and centres generational bias, elder loneliness and family reconciliation.',
    evidenceUrl: 'https://www.indiatoday.in/movies/reviews/story/daadi-ki-shaadi-review-kapil-sharma-neetu-kapoor-film-turns-preachy-and-overlong-2908511-2026-05-08', evidenceSource: 'India Today — Daadi Ki Shaadi review', evidenceClaim: 'the remarriage premise and family-neglect theme' },
  { title: 'Pati Patni Aur Woh Do', status: 'neutral', lane: 'neutral', sourceBasis: 'original-fiction',
    understanding: 'A Prayagraj marital farce in which deception produces suspicion, romantic chaos and questions about fidelity and gender expectations.',
    qualification: 'Its local setting and marriage framework are culturally familiar, but the film’s comic confusion and possessiveness do not amount to a sustained civilizational thesis.',
    fact: 'The film is contemporary fictional comedy about marriage, lies and romantic suspicion.',
    evidenceUrl: 'https://www.rottentomatoes.com/m/pati_patni_aur_woh_do', evidenceSource: 'Rotten Tomatoes — Pati Patni Aur Woh Do', evidenceClaim: 'the Prayagraj marriage-farce synopsis' },
  { title: 'Kartavya', status: 'certified', lane: 'social', sourceBasis: 'original-fiction',
    understanding: 'A police crime drama in which an officer must balance professional duty, conscience and the immediate danger facing his family.',
    qualification: 'The central dilemma explicitly treats public duty and personal Raksha as competing obligations, giving the film a substantive Dharma/Social Dharma axis despite noir conventions.',
    fact: 'The film is fictional and organises its conflict around a police officer’s duty and family protection.',
    evidenceUrl: 'https://www.rottentomatoes.com/m/kartavya_2026', evidenceSource: 'Rotten Tomatoes — Kartavya', evidenceClaim: 'the police-duty versus family-protection premise' },
  { title: 'Krishna aur Chitthi', status: 'certified', lane: 'sacred', sourceBasis: 'original-fiction',
    understanding: 'A Hindi family drama that places devotion to Lord Krishna alongside cricket fandom and asks what distinguishes faith, intention and idolatry of celebrity.',
    qualification: 'Its Vaikuntha-versus-Wankhede contrast treats Krishna devotion as a living moral and emotional framework rather than ridicule.',
    fact: 'The released synopsis explicitly contrasts the \'God of Cricket\' with the Lord of the Universe inside a family-faith story.',
    evidenceUrl: 'https://in.bookmyshow.com/movies/udai/krishna-aur-chitthi/ET00498385', evidenceSource: 'BookMyShow — Krishna aur Chitthi', evidenceClaim: 'the family, cricket and Krishna-faith premise' },
  { title: 'Shree Baba Neeb Karori Maharaj', status: 'certified', lane: 'sacred', sourceBasis: 'biopic',
    understanding: 'A biographical devotional film following Lakshman Narayan Sharma’s journey into the saint revered as Neem Karoli Baba.',
    qualification: 'Its emphasis on compassion, faith and unconditional love is explicitly affirmative toward Hindu spiritual inheritance, with ordinary biopic reconstruction caveats.',
    fact: 'The film presents a devotional biography of Neem Karoli Baba and his teachings.',
    evidenceUrl: 'https://in.bookmyshow.com/movies/bengaluru/shree-baba-neeb-karori-maharaj/ET00494239', evidenceSource: 'BookMyShow — Shree Baba Neeb Karori Maharaj', evidenceClaim: 'the Hindi biographical film and its spiritual-teaching premise', risk: 'history' },
  { title: 'Maa Behen', status: 'mixed', lane: 'mixed', sourceBasis: 'original-fiction',
    understanding: 'A crime-comedy about a mother and estranged daughters who try to conceal a crime inside a nosy residential colony.',
    qualification: 'Family solidarity is central, but loyalty becomes entangled with concealment and lawbreaking, preventing a clean Dharmic endorsement.',
    fact: 'The film is fictional and uses a family cover-up as both comic and moral conflict.',
    evidenceUrl: 'https://www.rottentomatoes.com/m/maa_behen', evidenceSource: 'Rotten Tomatoes — Maa Behen', evidenceClaim: 'the mother-daughters crime-cover-up premise' },
  { title: 'Bandar', status: 'mixed', lane: 'mixed', sourceBasis: 'original-fiction',
    understanding: 'A socio-legal crime drama that examines prison, accusation, consent and ingrained gender dynamics.',
    qualification: 'Its willingness to test institutional injustice and gendered assumptions is a Social Dharma strength, but the film deliberately leaves difficult moral and legal tensions unresolved.',
    fact: 'The film is a fictional socio-legal drama about accusation, incarceration and gender relations.',
    evidenceUrl: 'https://www.rottentomatoes.com/m/bandar', evidenceSource: 'Rotten Tomatoes — Bandar', evidenceClaim: 'critical consensus around gender dynamics and the justice system' },
  { title: 'Main Vaapas Aaunga', status: 'certified', lane: 'history', sourceBasis: 'mixed-unknown',
    understanding: 'A two-era drama in which a family’s Partition memory, lost Punjab homeland and unfinished love survive across generations.',
    qualification: 'The film’s remembrance of displacement, home and pre-Partition Punjab is a strong Itihasa and Local Roots signal even where political framing is contested.',
    fact: 'The story is fiction derived from Partition memories and follows a grandson decoding an elder’s recollections of Sargodha.',
    evidenceUrl: 'https://www.indiatoday.in/movies/reviews/story/main-vaapas-aaunga-review-the-weakest-imtiaz-ali-film-with-diljit-dosanjh-sharvari-vedang-raina-2925141-2026-06-11', evidenceSource: 'India Today — Main Vaapas Aaunga review', evidenceClaim: 'the Partition-memory and belonging narrative', risk: 'history' },
  { title: 'Bharat Bhhagya Viddhaata', status: 'certified', lane: 'rashtra', sourceBasis: 'true-story',
    understanding: 'A 26/11-set drama foregrounding nurses and medical workers protecting patients during an armed attack on a hospital.',
    qualification: 'Service without weapons, protection of vulnerable patients and courage under terrorist attack create direct Raksha, Rashtra and Social Dharma signals.',
    fact: 'The film is presented as a tribute to Cama Hospital medical workers during the 26/11 attacks.',
    evidenceUrl: 'https://www.rottentomatoes.com/m/bharat_bhhagya_viddhaata', evidenceSource: 'Rotten Tomatoes — Bharat Bhhagya Viddhaata', evidenceClaim: 'the hospital attack and nurses’ protection of patients', risk: 'history' },
  { title: 'The Narmada Story', status: 'certified', lane: 'social', sourceBasis: 'original-fiction',
    understanding: 'A Madhya Pradesh heartland thriller about a tribal mother protecting her daughter with help from a woman sub-inspector against powerful criminals.',
    qualification: 'Protection of a child, dignity of an Adivasi family and lawful resistance to corruption create strong Raksha, Local Roots and Social Dharma signals.',
    fact: 'The film is fictional and explicitly situated in Madhya Pradesh around a tribal woman’s fight for her daughter.',
    evidenceUrl: 'https://in.bookmyshow.com/movies/the-narmada-story/ET00490834', evidenceSource: 'BookMyShow — The Narmada Story', evidenceClaim: 'the tribal mother, woman officer and corruption premise' },
  { title: 'Cocktail 2', status: 'neutral', lane: 'neutral', sourceBasis: 'original-fiction',
    understanding: 'A modern relationship drama in which a long-term couple’s loyalty test turns into a love triangle and escalating emotional conflict.',
    qualification: 'Questions of fidelity and commitment matter, but the film’s glamour-driven romantic machinery does not sustain a Bharatiya civilizational thesis.',
    fact: 'The film is contemporary fiction about loyalty, jealousy and a love triangle.',
    evidenceUrl: 'https://www.rottentomatoes.com/m/cocktail_2', evidenceSource: 'Rotten Tomatoes — Cocktail 2', evidenceClaim: 'the long-term relationship and loyalty-test premise' },
  { title: 'Welcome to the Jungle', status: 'neutral', lane: 'neutral', sourceBasis: 'original-fiction',
    understanding: 'An ensemble action-comedy in which police officers chase a criminal while personal connections complicate duty and justice.',
    qualification: 'Public-duty language exists, but the film’s governing mode is broad franchise comedy rather than serious civilizational or Dharmic argument.',
    fact: 'The film is a fictional police-and-criminal ensemble comedy.',
    evidenceUrl: 'https://www.rottentomatoes.com/m/welcome_to_the_jungle_2026', evidenceSource: 'Rotten Tomatoes — Welcome to the Jungle', evidenceClaim: 'the police pursuit and justice-versus-emotion premise' },
  { title: 'Alpha', status: 'certified', lane: 'rashtra', sourceBasis: 'original-fiction',
    understanding: 'A female-led YRF spy thriller in which elite agents confront a national-security threat, betrayal and survival.',
    qualification: 'The film’s India-protection mission creates clear Rashtra/Raksha direction even if franchise formula, melodrama and action spectacle lower narrative depth.',
    fact: 'The film is fictional espionage entertainment centred on agents protecting India.',
    evidenceUrl: 'https://www.indiatoday.in/amp/movies/reviews/story/alpha-movie-review-alia-bhatt-is-alpha-rest-is-beta-in-sharvari-bobby-deol-anil-kapoor-action-film-yrf-spy-universe-2939698-2026-07-03', evidenceSource: 'India Today — Alpha review', evidenceClaim: 'the national-security mission and Pakistan-facing spy conflict' },
  { title: 'Satluj', status: 'certified', lane: 'history', sourceBasis: 'biopic',
    understanding: 'A biographical drama about human-rights activist Jaswant Singh Khalra and his investigation into disappearances during Punjab’s militancy years.',
    qualification: 'Recovering victims, insisting on truth and preserving a difficult regional historical memory create strong Itihasa and Social Dharma signals.',
    fact: 'The film is based on Jaswant Singh Khalra and his documentation of disappearances in Punjab.',
    evidenceUrl: 'https://www.rottentomatoes.com/m/satluj', evidenceSource: 'Rotten Tomatoes — Satluj', evidenceClaim: 'the Khalra biography and disappearances investigation', risk: 'history' },
  { title: 'Dhamaal 4', status: 'neutral', lane: 'neutral', sourceBasis: 'original-fiction',
    understanding: 'A franchise treasure-hunt comedy built around slapstick, danger, animals and an ensemble chasing chaos rather than moral seriousness.',
    qualification: 'Family-audience familiarity and Indian comic tradition do not automatically create a civilizational value proposition.',
    fact: 'The film is a fictional slapstick treasure-hunt sequel.',
    evidenceUrl: 'https://indianexpress.com/article/entertainment/movie-review/dhamaal-4-movie-review-unfunny-jokes-cgi-avalanche-sink-ajay-devgn-creaky-comedy-10780277/', evidenceSource: 'Indian Express — Dhamaal 4 review', evidenceClaim: 'the sequel’s treasure-hunt and slapstick structure' },
  { title: 'Ikka', status: 'certified', lane: 'social', sourceBasis: 'original-fiction',
    understanding: 'A courtroom thriller in which an idealistic lawyer faces pressure to defend a powerful man accused of grievously assaulting a young woman.',
    qualification: 'Law, privilege, conscience and the lawyer’s refusal to trivialise harm give the film a substantive Social Dharma and justice axis.',
    fact: 'The film is fictional courtroom drama centred on privilege, assault and professional ethics.',
    evidenceUrl: 'https://www.indiatoday.in/movies/reviews/story/ikka-review-sunny-deol-akshaye-khanna-courtroom-thriller-feels-dated-and-predictable-2944747-2026-07-10', evidenceSource: 'India Today — Ikka review', evidenceClaim: 'the privilege-versus-justice courtroom conflict' },
  { title: 'The India Story', status: 'mixed', lane: 'mixed', sourceBasis: 'original-fiction',
    understanding: 'A courtroom-social drama about pesticide contamination, food safety and a grieving father challenging companies and public systems.',
    qualification: 'Protecting consumers and agricultural health is a legitimate Social Dharma concern, but the film’s broad causal and scientific claims require stronger factual discipline than the drama consistently supplies.',
    fact: 'The film is fictional issue cinema about pesticides, food contamination and accountability.',
    evidenceUrl: 'https://www.indiatoday.in/movies/reviews/story/the-india-story-review-food-safety-courtroom-drama-shreyas-talpade-kajal-aggarwal-2955159-2026-07-24', evidenceSource: 'India Today — The India Story review', evidenceClaim: 'the pesticide, food-safety and courtroom premise', risk: 'factual' },
  { title: 'Awarapan 2', status: 'mixed', lane: 'mixed', sourceBasis: 'original-fiction',
    understanding: 'A crime-world sequel in which Shivam’s path again turns on redemption, love, sacrifice and violent rescue.',
    qualification: 'The desire for redemption is Dharmically meaningful, but criminal methods and repeated violence remain inseparable from the hero’s moral arc.',
    fact: 'The film is fictional crime-romance focused on redemption and sacrifice.',
    evidenceUrl: 'https://www.rottentomatoes.com/m/awarapan_2', evidenceSource: 'Rotten Tomatoes — Awarapan 2', evidenceClaim: 'the redemption, sacrifice and crime-world premise' },
  { title: 'Batwara 1947', status: 'certified', lane: 'history', sourceBasis: 'fiction-adaptation',
    understanding: 'A Partition drama adapted from a stage tradition and centred on families shattered by communal violence, courage and cross-religious humanity.',
    qualification: 'Remembering Partition while refusing the claim that any religion is inherently evil supports Itihasa and Social Dharma, even though the adaptation’s melodrama and caricatures weaken nuance.',
    fact: 'The film adapts a Partition-era humanist story and explicitly foregrounds survival and shared humanity.',
    evidenceUrl: 'https://www.rottentomatoes.com/m/batwara_1947', evidenceSource: 'Rotten Tomatoes — Batwara 1947', evidenceClaim: 'the Partition, courage and shared-humanity premise', risk: 'history' },
  { title: 'Babita Singh Reporting', status: 'certified', lane: 'social', sourceBasis: 'original-fiction',
    understanding: 'A small-town police drama about a woman officer navigating a murder case, workplace politics, patriarchy and family pressure.',
    qualification: 'Her effort to earn authority through public service and investigation supplies a clear duty-and-dignity Social Dharma signal.',
    fact: 'The film is fictional and follows an assistant sub-inspector balancing a murder investigation with domestic pressure.',
    evidenceUrl: 'https://indianexpress.com/article/entertainment/movie-review/babita-singh-reporting-review-nimisha-sajayan-shines-but-weak-murder-mystery-holds-it-back-10853011/', evidenceSource: 'Indian Express — Babita Singh Reporting review', evidenceClaim: 'the woman-cop, workplace and murder-investigation premise' },
  { title: 'Gandhari', status: 'mixed', lane: 'mixed', sourceBasis: 'original-fiction',
    understanding: 'A revenge thriller about a mother whose daughter is kidnapped by a trafficking ring and who pursues the perpetrators herself.',
    qualification: 'Maternal Raksha is powerful, but vigilantism and implausible revenge mechanics keep protective duty from becoming uncomplicated Dharma.',
    fact: 'The film is fictional and centres a mother confronting a child-trafficking network after institutional failure.',
    evidenceUrl: 'https://indianexpress.com/article/entertainment/movie-review/gandhari-movie-review-taapsee-pannu-film-is-neither-impactful-nor-believable-10861612/', evidenceSource: 'Indian Express — Gandhari review', evidenceClaim: 'the child-trafficking and maternal-revenge premise' },
  { title: 'Mirzapur: The Movie', status: 'neutral', lane: 'neutral', sourceBasis: 'original-fiction',
    understanding: 'A feature-film continuation of the Mirzapur crime universe, reviving Kaleen Bhaiyya, Guddu, Munna and local power struggles.',
    qualification: 'Regional texture and popular-cultural continuity are real, but the film’s centre remains criminal power, revenge and spectacle rather than a positive civilizational thesis.',
    fact: 'The film is fictional gangster entertainment extending the Mirzapur series.',
    evidenceUrl: 'https://indianexpress.com/article/entertainment/movie-review/mirzapur-the-movie-review-pankaj-tripathi-shines-in-an-overlong-but-enjoyable-ride-10863140/lite/', evidenceSource: 'Indian Express — Mirzapur The Movie review', evidenceClaim: 'the return to the Mirzapur crime world and its power conflicts' },
  { title: 'Haiwaan', status: 'neutral', lane: 'neutral', sourceBasis: 'fiction-adaptation',
    understanding: 'A crime thriller about a blind man who becomes a violent crime-fighter while pursuing a serial killer.',
    qualification: 'Protection and resistance to predation are present, but the remake’s governing grammar is a stylised cat-and-mouse thriller rather than a sustained Bharatiya thesis.',
    fact: 'The film is a Hindi crime thriller/remake centred on a vigilante-like pursuit of a killer.',
    evidenceUrl: 'https://www.rottentomatoes.com/m/haiwaan', evidenceSource: 'Rotten Tomatoes — Haiwaan', evidenceClaim: 'the blind crime-fighter and serial-killer premise' },
  { title: 'Vibe', status: 'neutral', lane: 'neutral', sourceBasis: 'original-fiction',
    understanding: 'A goofy spy comedy about two ordinary friends blundering into a national-security mission.',
    qualification: 'The mission supplies a nominal Rashtra frame, but incompetence and friendship comedy dominate enough that certification would overread genre stakes as civic virtue.',
    fact: 'The film is fictional espionage comedy with a national-security assignment.',
    evidenceUrl: 'https://indianexpress.com/article/entertainment/movie-review/vibe-movie-review-kunal-kemmu-goofy-spy-saga-has-vibe-10883323/', evidenceSource: 'Indian Express — Vibe review', evidenceClaim: 'the goofy spy mission and friendship-centred structure' },
  { title: 'Daayra', status: 'mixed', lane: 'mixed', sourceBasis: 'true-story',
    understanding: 'An investigative thriller inspired by true events, with two senior police officers divided over a controversial case and the legality of justice by encounter.',
    qualification: 'Its demand for accountability is a Social Dharma strength, but ambiguity around extra-judicial violence makes the means of justice materially contested.',
    fact: 'The film is inspired by real events and explicitly tests truth, encounter killing and institutional accountability.',
    evidenceUrl: 'https://www.rottentomatoes.com/m/daayra', evidenceSource: 'Rotten Tomatoes — Daayra', evidenceClaim: 'the true-event inspiration and encounter-justice debate', risk: 'history' },
  { title: 'The Vvaan: Force of the Forrest', status: 'certified', lane: 'sacred', sourceBasis: 'folklore-sacred-tradition',
    understanding: 'A folklore fantasy in which an urban rationalist returns to an ancestral village, violates a forbidden forest and awakens a divine goddess who becomes central to protecting the community.',
    qualification: 'Ancestral place, sacred ecology, goddess power and protection of the village are direct Parampara, Local Roots, Sacred Regard and Raksha signals despite uneven commercial execution.',
    fact: 'The film is fictional folklore fantasy that treats the goddess and forbidden forest as real sacred forces within its narrative.',
    evidenceUrl: 'https://www.rottentomatoes.com/m/the_vvaan_force_of_the_forrest', evidenceSource: 'Rotten Tomatoes — The Vvaan', evidenceClaim: 'the ancestral village, forbidden forest and divine-goddess premise' },
];

export const hardenedCorpus50E: SanghiProfile[] = rows.map(make50EFilm);

if (hardenedCorpus50E.length !== 50) {
  throw new Error(`Expected hardened 50E Hindi tranche to contain 50 films, got ${hardenedCorpus50E.length}`);
}

const keys = hardenedCorpus50E.map((profile) =>
  `${profile.title.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, ' ').trim()}::${profile.year}`
);

if (new Set(keys).size !== hardenedCorpus50E.length) {
  throw new Error('Hardened 50E tranche contains duplicate title/year records');
}

if (hardenedCorpus50E.some((profile) => profile.language !== 'Hindi')) {
  throw new Error('Hardened 50E tranche must contain Hindi profiles only');
}
