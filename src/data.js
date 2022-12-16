const user = {
    name: "Arvin Garay",
    occupation: "Architecture / Project Management / Design",
    email: "arvingaray@gmail.com ",
    phone: "",
    instagram: "https://www.instagram.com/arvin.garay",
    linkedin: "https://www.linkedin.com/in/arvingaray",
    address: "Brooklyn, New York, USA",
    about: `Objectives: Become a member of a superb design-driven team, that allows the use of various design, management and supervision skills with industry, work ethics and audacity. Continue solidifying experience in the challenging discipline of Architecture. Joining painstaking organization wide-awake of sustainability issues is a plus.
    \n
    Over the course of the past years I have diversified my resume with further experience in different areas of the architectural profession. I now have under my belt plenty of experience in Project Management, Supervision, Construction Administration, Bidding and Negotiation as well as specialized exposure to the fields of Building Sciences, Forensic Architecture, Litigation of construction-related cases, as well as expertise in Waterproofing, Roofing and Building Envelope. 
    \n
    I am also certified (30 hours) with the Occupational Safety and Health Administration (OSHA), I am registered as a Class-1 Filing Representative with the New York City Department of Buildings (DOB), have experience with the NYC Landmark Preservation Commission (LPC), as well as scaffold trained to conduct Façade Inspection & Safety Program (FISP) inspections throughout the city. All of the above are very NYC-specific credentials, with projects of all kinds of scope, including high profile residential one-family homes, multi-family residential buildings, as well public buildings involving government agencies like the New York City Housing Authority (NYCHA), the City University of New York (CUNY), the Dormitory Authority of the State of New York (DASNY) and the NYC Department of Sanitation (DSNY). 
    \n
    Accumulated experience at mid-size and boutique design firms, working on an array of proposals, commissions and competitions, mostly concentrated on high-rise residential construction. 
    \n
    Early on my career I have the opportunity to entirely design and manage the construction for a 3K sq. ft. single-family home. This represented the opportunity to deal with all the intricacies of a small project, develop an effective design-build strategy, and implement modest but significant sustainable design decisions that added value to the project.
    \n
    Specialties: Project Management, Supervision, Construction Administration, Bidding and Negotiation, Building Sciences, Forensic Architecture, Litigation, Waterproofing, Roofing and Building Envelope, Construction Documentation, Management, Detailing, Computer Aided Design, Building Information Modelling, Digital Fabrication, Space Planning, Interior Design, Concept Design, Imaging.`
}

const portfolio = [
    {
        id: "0100",
        code: "A0",
        name: "AdLO House",
        location: "Barrio Culebrinas, San Sebastián, Puerto Rico",
        size: "Sustainable - Single Family Home, 3K sq. ft.",
        firm: "Freelance Architectural Design, Brooklyn",
        description: "The design for this single-family home for a young professional couple and their two daughters takes advantage of its particularly sloped location and the existing nature around it. The project looks to recognize the majestic presence of a Guanacaste tree. The sequence established when approaching the site works on this direction too. The problem of having to achieve a visually appealing main façade to the south, while protecting it from the intense tropical sun was resolved by merging the circulation with a multi-program brise-soleil. This helped create a buffer zone with a dynamic element combining sun-shading, evolving vegetation and water collection-irrigation as the main image of the house. The orientation towards a north-south axis takes advantage of the immense shadow-radius produced by the tree canopy, while gaining desirable views of the surrounding and distinctly mountain range and nearby downtown.",
        images: ['A0-1.jpg', 'A0-2.jpg', 'A0-3.jpg']
    },
    {
        id: "010",
        code: "Ap",
        name: "Apple Centre Building",
        location: "Barcelona, Catalunya",
        size: "Off-Shore Business Headquarters",
        firm: "Fourth Year Studio, Rio Piedras",
        description: "",
        images: ['A0-1.jpg', 'A0-2.jpg', 'A0-3.jpg']
    },
    {
        id: "070",
        code: "Ai",
        name: "MIT Physics Hall",
        location: "Vassar Street, Cambridge, Massachusetts",
        size: "Thought Experiment Live-Study Hybrid",
        firm: "Steven Holl Studio, GSAPP, Columbia University",
        description: "This project, set on a 10,000-pyeong (1 pyeong equals 3.3 square meters) contruction site in the center of the Yeouido Island, is a $1.6 billion world class building complex intended to reinvent Seoul’s city identity. Faced on 8.17 acres of land facing Yeouido Park, and scheduled to completition in 2013, this mixed-use complex will be comprised of three office towers, a five-star hotel, a retail mall, fine dining and considerable new outdoor public spaces. The project aspires to become a defining landmark of Korea and help in the revitalization of the island, that houses also the headquarters of many Korean financial institutions and the National Assembly. To experience this project, represented the opportunity to be exposed to an international team and a superb team cross-functional design experience.",
        images: ['A0-1.jpg', 'A0-2.jpg', 'A0-3.jpg']
    },
    {
        id: "080",
        code: "Ph",
        name: "MIT Physics Hall",
        location: "Yeouido District, Seoul, South Korea",
        size: "Mixed-Use Complex, 5M sq. ft.",
        firm: "Arquitectonica International Corporation",
        description: "This proposal was the result of several and intense material studies that were transformed into programmatic and architectural reality. In this sense the particular uses for a live-study facility at the significantly expansive MIT campus was understood as a plastic malleable component that allowed the formulation of new programmatic conditions. The idea of the structure holding this program was explored through the use of various laser cutter techniques. A section analysis study helped to redefine the morphology of the project and reformulate the new programmatic conditions. This exercise attempted to address the issue of plasma as a constructive/concept generator material. Being the prevailing state of matter, the so called fourth state is abundantly present throughout the known universe. Plasma is an exception in planet Earth, but have different manifestations for example in Aurora Borealis (Northern Light), fire, flourescent lights, Tokmaks, etc. Using these initial ideas about plasma, PMC-121 rubber was selected as a similar-in-performance and more manageable material for experimentation. The rubber was manipulated and tested in performance and structural capabilities through diffe- rent casting experimentations.",
        images: ['A0-1.jpg', 'A0-2.jpg', 'A0-3.jpg']
    },
    {
        id: "030",
        code: "Wa",
        name: "22 Water Street",
        location: "East Cambridge, Massachusetts East Cambridge, Massachusetts",
        size: "392-Unit Residential Tower, 500-K sq. ft.",
        firm: "Arquitectonica International Corporation, 2005",
        description: "",
        images: ['A0-1.jpg', 'A0-2.jpg', 'A0-3.jpg']
    },
    {
        id: "0111",
        code: "Mu",
        name: "Leaf House",
        location: "Barrio Pozas, San Sebastian, Puerto Rico",
        size: "Self-Sustainable Single-Family Residence, 3.5K sq.ft",
        firm: "Freelance Architectural Design, Brooklyn",
        description: "This project took advantage of its isolated location as the driving force behind its design. Located in the middle of a plantain field, it required accommodation for 3,000 sqft for a young family. From its inception it approaches issues of identity and sustainability. The house was strategically located on top of the highest point on the property to take advantage the winds, the solar gains and the spectacular views. Due to the lack of proper water and power infrastructure, water and solar collection was a fundamental element on the design. A tunnel intended to passive-cool the house was located in between the concrete slab, with the intention that it would control the wind using the fluid dynamics ‘Bernoulli’ principle. The distinctive leaf of the surrounding musa paradisiaca trees (plantain) was used as reference for the proposed envelope for the house. Platain is the backbone of the diet and identity of the culture where this project is located. ",
        images: ['A0-1.jpg', 'A0-2.jpg', 'A0-3.jpg']
    },
    {
        id: "0110",
        code: "St",
        name: "New York Jets / 2012 NYC Olympic Bid Stadium",
        location: "Hudson Yards, New York",
        size: "Plug and Play Sport-Leisure Field",
        firm: "Lise Ann Couture, GSAPP, Columbia University",
        description: "This project focused specifically on new proposals for the West Side Stadium building, and challenged formal preconceptions while critically engaging the surrounding urban context both physically and culturally. After dedicating some time examining the history of the stadium typology up to recent developments on this typology, a ‘borderless’ urban approach was suggested. This ‘borderless’ condition intended both to erase the Hudson River frontier to the west and the significant urban barrier that is 11th Avenue to create a plug-and-play strategy in which the stadium became the most important magnet. The notion of a contained stadium was disrupted with a sport facility that would integrate the surrounding urban parks, water venues and pedestrian corridors conforming the bigger urban strategy into the stadium field itself. The concept of “urban tailgating” is the best evidence of this strategy. ",
        images: ['A0-1.jpg', 'A0-2.jpg', 'A0-3.jpg']
    },
    {
        id: "0050",
        code: "Sa",
        name: "Sands Casino & Hotel",
        location: "Atlantic City, New Jersey",
        size: "Mixed-Use Re-Development, 1.5mil sq. ft.",
        firm: "Arquitectonica International, New York",
        description: "",
        images: ['A0-1.jpg', 'A0-2.jpg', 'A0-3.jpg']
    },
    {
        id: "0113",
        code: "Ma",
        name: "151-161 Maiden Lane, South Street Seaport",
        location: "Lower Manhattan, New York",
        size: "Condo-Hotel Tower, 250K sq. ft",
        firm: "Arquitectonica International Corporation",
        description: "",
        images: ['A0-1.jpg', 'A0-2.jpg', 'A0-3.jpg']
    },
    {
        id: "020",
        code: "Al",
        name: "Museum of Alternate Histories",
        location: "Battery Park City, New York",
        size: "Compound Structure Hybrid Space",
        firm: "Kahtryn Dean Studio, GSAPP, Columbia University",
        description: "Using the topic of “compound structures” as a point of reference, the first stages of the design process for this project attempted to address various issues about the site and the museum as a social construct. A grand scale composite painting by the American painter Robert Rauschenberg was analyzed and used as a conceptual guide. This painting, by the use of paint strokes, color and “found objects”, reflects the “memory” of the author’s first walk through the streets of Manhattan. The sequence of this walk was reconstructed using various two and three dimensional methods that eventually helped to define the spatial experience for the project. This methodology was translated eventually to the specifics of the site and the definition of the program. The result was a “museum of alternate histories” that merged into its Battery Park location, between the historics Castle Clinton and Pier A.",
        images: ['A0-1.jpg', 'A0-2.jpg', 'A0-3.jpg']
    },
    {
        id: "090",
        code: "Se",
        name: "Sentosa Island Complex",
        location: "Sentosa, Singapore",
        size: "Eight Wonder Integrated Resort Competition, $5.5-B",
        firm: "Arquitectonica International Corporation",
        description: "",
        images: ['A0-1.jpg', 'A0-2.jpg', 'A0-3.jpg']
    },
    {
        id: "080",
        code: "Ca",
        name: "Casona Cultural Center",
        location: "Downtown San Sebastian, San Sebastian, Puerto Rico",
        size: "Mixed-Use Micro-Tower, 8K sq. ft.",
        firm: "Freelance Architectural Design, Brooklyn",
        description: "",
        images: ['A0-1.jpg', 'A0-2.jpg', 'A0-3.jpg']
    },
    {
        id: "0112",
        code: "We",
        name: "440 West 42nd",
        location: "Theater District, New York",
        size: "Mixed-Use Sky-Tower, 1.2M sq. ft",
        firm: "Arquitectonica International Corporation",
        description: "This mixed condo/rental project occupies an entire city block and will include two retail levels, theaters and health club above underground parking, and rental apartments and condominiums with views of the Hudson River, and Times Square.",
        images: ['A0-1.jpg', 'A0-2.jpg', 'A0-3.jpg']
    },
    {
        id: "0116",
        code: "Jo",
        name: "A-Frame House",
        location: "Jobos, Isabela, Puerto Rico",
        size: "Surfer Dwelling Proposal, 1K sq. ft.",
        firm: "Freelance Architectural Design, Brooklyn",
        description: "",
        images: ['A0-1.jpg', 'A0-2.jpg', 'A0-3.jpg']
    },
    {
        id: "0116",
        code: "Ha",
        name: "Harlem Park",
        location: "Harlem, New York City",
        size: "Mixed-Used Skyscraper, 550K sq. ft.",
        firm: "TEN Arquitectos, New York",
        description: "",
        images: ['A0-1.jpg', 'A0-2.jpg', 'A0-3.jpg']
    },
    {
        id: "0117",
        code: "Mo",
        name: "Monocropping",
        location: "International Federation for Housing and Planning, San Juan, Puerto Rico",
        size: "Young Architects Perspective Panel",
        firm: "52nd World Congress, Invited Speaker",
        description: "",
        images: ['A0-1.jpg', 'A0-2.jpg', 'A0-3.jpg']
    },
    {
        id: "0114",
        code: "Ga",
        name: "The Gates 1979-2005",
        location: "Central Park, New York City",
        size: `Site Specific Work of Art, 7,503 “gates", 23 miles`,
        firm: "Christo and Jean-Claude, 2005",
        description: "",
        images: ['A0-1.jpg', 'A0-2.jpg', 'A0-3.jpg']
    },
    {
        id: "0118",
        code: "Ca",
        name: "City Archetypical Refuge / C.A.R.",
        location: "Downtown Los Angeles, Sci-Arc 'Campus', California",
        size: "Coarse 'Site-Specific' Installation/Shelter",
        firm: "Summer Workshop, Universität der Künste/ Sci-Arc",
        description: "",
        images: ['A0-1.jpg', 'A0-2.jpg', 'A0-3.jpg']
    },
]

export {
    user,
    portfolio,
}