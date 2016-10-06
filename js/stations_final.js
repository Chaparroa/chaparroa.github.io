//Problem: The computer needs to pull a specific data set based on what station a user selects from the Train line navigation

//Create array for each Metro Line and their stations, break up object content to organize for future use
var goldStations = [];

var goldStation1 = {
	location:"<h3>Location:</h3><p>Atlantic Station</p>",
	title: "<h2>Blissful Interiors, 2009</h2>",
	description:"<h3>Description:</h3><p>Adobe LA created a series of benches with tile rugs at the platform and a large scale free standing sculpture inspired by the striking and colorful design culture of Eastside living rooms, shops, cars, and toys.</p><p>By researching local residential and urban design culture, Adobe LA collected a variety of design motifs that survey what local residents are comfortable with and proud of, and manifest this knowledge into an artistic outcome in the station environment.</p>",
	statement:"<h3>Artist Statement</h3><p>We are completely immersed in an environment where design is dictated. From our local shopping centers, freeways, to a neighborhood restaurant, we have no say in what our environment looks like. However, our homes are quite different. Here we can have total control. They are our sanctuary. We wanted to celebrate this fact and extend it to the station environment.</p>",
	artist:"<h3>Artist</h3><p>ADOBE LA is an arts collective of architects and designers including Ulises Diaz, Gustavo Leclerc, Laura Alvarez and Barbara Jones. They have created inter-disciplinary artworks about the immigrant experience for the Museum of Contemporary Art in Los Angeles, San Francisco Museum of Modern Art, the Social and Public Art Resource Center in Los Angeles, the Los Angeles Criminal Justice Building, and various sites on the border between the U.S.A. and Mexico.</p>",
	image:"https://media.metro.net/photologue/photos/atlantic2.jpg"
}
var goldStation2 = {
	location:"<h3>Location:</h3><p>East LA Civic Center</p>",
	title:"<h2>Through the Looking Glass or Traveling at the Speed of Light (Rail),2009</h2>",
	description:"<h3>Description:</h3><p>Inspired by Lewis Carroll’s “Through the Looking Glass,” the platform incorporates a monumental steel looking glass sculpture that overlooks a representation of the solar system made from concrete pavers. Playing with scale and our imagination, the metaphor of discovery and wonder is discovered here in the form of transportation, where the light rail becomes the “looking glass” into the undiscovered world. The looking glass is inscribed with a quote from Jaime Escalante, a notable educator who taught in the immediate area.</p>",
	statement:"<h3>Artist Statement</h3><p>The Metro Gold Line is a new technology that our community needs. In a city run by cars, rail will empower people by giving access to a larger Los Angeles at their whim. This ability to venture to any part of the map will be a key to the universe.</p>",
	artist:"<h3>Artist</h3><p>CLEMENT HANAMI received his Bachelor of Art and Master of Art from the University of California, Los Angeles and has been exhibiting his thematic installations and multi-media work since 1986. He has exhibited his artwork at the Japanese American Cultural and Community Center, Sony Pictures Studios, L.A. Artcore, Los Angeles Center of Photographic Studies and the Museum of Contemporary Art, Los Angeles. Hanami is also a COLA grant recipient, an annual individual artist award given by the Department of Cultural Affairs, City of Los Angeles.</p>",
	image:"https://media.metro.net/photologue/photos/civic2.jpg"
}
var goldStation3 = {
	location:"<h3>Location:</h3><p>Maravilla Station</p>",
	title:"<h2>Maravilla Hearts of Token,2009</h2>",
	description:"<h3>Description:</h3><p>The primary artwork features a series of aluminum almond shaped panels that echo the shape of the platform canopy.  The panels contain images from the past and present-day Boyle Heights community, and are cut out to depict images of historic transit tokens and landmarks in a style reminiscent of papel picado (cut paper) and Japanese wood block prints.</p><p>Laminated glass canopy skylights also include artist selected images of local history and iconic travel imagery. On the west end of the station landscape area, large metal sculptures forming the words “TO…”, evokes the famed Hollywood sign and creates a new landmark.</p>",
	statement:"<h3>Artist Statement</h3><p>I am striving to create an exciting day environment. I was inspired by images of transportation tokens from all transit periods in Los Angeles and how this element of our collective histories carries with it personal stories of travel. I intend to use local architectural landmarks which will also bring a familiar image of travel to the station experience.</p>",
	artist:"<h3>Artist</h3><p>JOSE LOPEZ is nationally recognized for his innovative light-based designs, creating stage and outdoor night installations using light, colors and gobo projections. He has worked with numerous art organizations such as Culture Clash, Cornerstone Theater, the East West Players, Los Angeles County Museum of Art, Self Help Graphics, and the Mark Taper forum.</p>",
	image:"http://www.publicartinla.com/Metroart/GoldLine2/maravilla1.jpg"
}
var goldStation4 = {
	location:"<h3>Location:</h3><p>Indiana Station</p>",
	title:"<h2>Syncretic Manifestations,2009</h2>",
	description:"<h3>Description:</h3><p>Inspired by the classic style of the Anasazi, Maya and Aztec Pre-Columbian cultures, the artwork is infused with a modern sensibility and stands as a metaphor for the relationship between nature, society and the sacred.</p><p>The artist created 16 stainless steel cut panels in the style of “papel picado” (cut paper) along both sides of the station area. The sculptures pay homage to “family” and “history.” Stylized large scale heads of Quetzalcoatl, the plumed serpent Mesoamerican deity mark the generations past and present and are located within the landscaped areas at both ends of the station platform.</p>",
	statement:"<h3>Artist Statement</h3><p>Our goal is to distill and abstract the many pivotal events that have shaped and formed a very dynamic community as well as a very rich Latino heritage.</p>",
	artist:"<h3>Artist</h3><p><strong>PAUL BOTELLO</strong> was born and raised in East Los Angeles. He earned a BA and an MFA from Cal State University, Los Angeles. He teaches art in the LAUSD school system and at Claremont College. In 1994 he traveled to Berlin, Germany where he collaborated on a giant mural titled “Global Chessboard.” Other recently completed murals include “Citizens of the World” at Esperanza School, and “In Unison” at the Maravilla Housing Facility. He also completed a large-scale mural on the Metro Gold Line construction fence that was located at First Street and Soto. Portions of the mural can now be found at the Pueblo del Sol Community Center in East Los Angeles. Botello lives and works in East Los Angeles, and exhibits his work in Los Angeles and abroad.</p>",
	image:"https://media.metro.net/photologue/photos/indiana2.jpg"
}
var goldStation5 = {
	location:"<h3>Location:</h3><p>Soto Station</p>",
	title:"<h2>Landings, 2009</h2>",
	description:"<h3>Description:</h3><p>Located in the heart of Boyle Heights, the artist’s goal is to create a focal communal space for the multi-generational communities of the area. Images of birds, alluding to migration and travel is the theme throughout portions of the plaza, escalator walls and mezzanine. Inside the mezzanine around bird silhouettes, a map of Boyle Heights and text that alludes to travel and destination. A nest like metal wire sculpture with a glowing cast fiberglass egg is suspended from a vaulted ceiling in the center of the mezzanine.</p>",
	statement:"<h3>Artist Statement</h3><p>With this design we would like to acknowledge the historical importance of Boyle Heights as a landing place for people from diverse cultural and ethnic backgrounds.</p>",
	artist:"<h3>Artist</h3><p><strong>NOBUHO NAGASAWA</strong> was born in Japan, and studied at the State Academy of Fine Arts in the Netherlands and the Hochschule de Kunste Berlin, where she received her Master of Fine Arts. She also attended California Institute of the Arts in Valencia, California. A conceptual artist, Nagasawa has had her work exhibited in galleries throughout the United States as well as Europe and Japan. In addition to public art projects in Germany, Japan and Southern California, including one at the Koll Anaheim Center, she was commissioned by Metro to be part of the design team for the LAX Gateway Station, Metro Green Line, and she has completed a work at the Vermont Square Branch Library for the Department of Cultural Affairs, City of Los Angeles. Other commissions include sculptural artworks for the Culver City Downtown Streetscape Project and for the Community Redevelopment Agency, City of Los Angeles Downtown Revitalization Project, The San Francisco Municipal Metro East Light Rail Maintenance and Operations Facility, the Seattle City Hall and the American Airlines Center in Dallas, Texas.</p>",
	image:"http://www.riverlifepgh.org//images/uploads/nobuho%20nagasawa_los%20angeles%20metro%20station.jpg"
}
var goldStation6 = {
	location:"<h3>Location:</h3><p>Mariachi Plaza</p>",
	title:"<h2>El Nino Perdido, 2009</h2>",
	description:"<h3>Description:</h3><p>The station’s plaza incorporates the Mariachi Plaza, a location that has been an informal gathering place for mariachi groups and music trios for decades. Inspired by the famous Mexican song from yesteryear, “El Niño Perdido” (the Lost Child), the artist sculpted a bronze statue of a mother and child which hangs over the entrance to the station. Also included on the plaza is a stone mural at the performing stage and floor medallions near the elevators incorporating animals of the Southwest region.</p><p>The entry stair landing is a colorful space of tile and a spiraling snake floor pattern. The mezzanine includes a series of granite wall and floor sculptures that allude to the universe and family. The designs echo the the lyrics for, “El Niño Perdido” and call for the lost child, his answer and the happy reunion.</p>",
	statement:"<h3>Artist Statement</h3><p>In our talks with the community we realized that children were very important to the neighborhood. We wanted the station and the artwork to reach out to young people and to foster the importance of nurturing and family.</p>",
	artist:"<h3>Artist</h3><p><strong>ALEJANDRO DE LA LOZA</strong> grew up in the Boyle Heights area of Los Angeles. He studied at California State University Long Beach, where he obtained a Bachelor of Fine Arts in sculpture and received a Master of Arts in American Indian Studies from the University of California Los Angeles. A talented sculptor, some of his recent commissions include the Echo Park Library and the Police Officers’ Memorial (in collaboration with East Los Streetscapers) in Los Angeles. He is an elementary school teacher and exhibits his work in the Los Angeles region.</p>",
	image:"https://media.metro.net/photologue/photos/mariachi2.jpg"
}
//Push stations into array , Is it possible to use FOR to automate? Would it be better/efficient?
// var goldStations = [];
// for (g= 1;g<=20;g=g+1)
// {
// goldStations.push({SOMETHING?})
// }

goldStations.push(goldStation1, goldStation2, goldStation3, goldStation4, goldStation5, goldStation6);
//check
console.log(goldStations);
console.log("Station Location:", goldStation1.location);

//when user clicks specific station, have information populate on page
$("#slide1").click(function(){
	$(".stationTitle").append(goldStations[0].title);
	$(".stationLocation").append(goldStations[0].location);
	$(".stationDescription").append(goldStations[0].description);
	$(".stationStatement").append(goldStations[0].statement);
	$(".stationArtist").append(goldStations[0].artist);
});
$("#slide2").click(function(){
	$(".stationLocation").append(goldStations[1].location);
	$(".stationTitle").append(goldStations[1].title);
	$(".stationDescription").append(goldStations[1].description);
	$(".stationStatement").append(goldStations[1].statement);
	$(".stationArtist").append(goldStations[1].artist);
});	
$("#slide3").click(function(){
	$(".stationLocation").append(goldStations[2].location);
	$(".stationTitle").append(goldStations[2].title);
	$(".stationDescription").append(goldStations[2].description);
	$(".stationStatement").append(goldStations[2].statement);
	$(".stationArtist").append(goldStations[2].artist);
});	

	//let's add Attributes
    //goldStations.attr("id", "heading");
    //jquery
    //body.append("<h2>End of the Body</h2>");
    // var txt = d.name + "," + d.age; //concatenate!!!
    // return txt;
    //Make each of those into variables and then append html?????



//Expo Station
var expoStations = [];

var expoStation1 = {
	location:"<p>Downtown Santa Monica</p>",
	title:"<p>L.A. Sonata, 2013</p>",
	description:"<p>Located at the terminus station, at the edge of the continent, the twenty-four art panels depict a composite of global mythologies. The artist layers images to create metaphors for day and night as well as the seasons. By weaving cultural identifiers with elements that denote the passage of time, artworks create a sense of shared place and historical significance that honors the heritage of the local, the immigrant and the tourist alike.</p>",
	statement:"<p>I sought an image palette from the ancient myths and legends of Europe, Mexico, Japan, India, Latin America, Iran, Russia, Native America, Polynesia and Africa. These images became a visual symphony, a magical dreamscape</p>",
	artist:"<p><strong>JUDITHE HERNÁNDEZ</strong> has completed public art projects for El Pueblo de Los Angeles Historic Monument; the Craft and Folk Art Museum; Ramona Gardens Housing Project; California State University, Los Angeles; and The Great Wall of Los Angeles Mural, in a flood control channel in Van Nuys. Her work has been acquired by private and public collections that include the Bank of America Collection, New York; Crocker Art Museum, Sacramento; National Museum of Mexican Art, Chicago; Vincent Price Art Museum, Los Angeles; El Paso Museum of Art, El Paso; Pennsylvania Academy of Fine Art, Philadelphia and the United Farm Workers Union, La Paz. She holds both a Master of Fine Arts and a Bachelor of Fine Arts from Otis Art Institute (now Otis College of Art and Design).</p>",
	image:"https://media.metro.net/photologue/photos/Hernandez_web_la_sonata.jpg"
}
var expoStation2 = {
	location:"<p>17th Street / SMC Station</p>",
	title:"<p>What you wore, What you wear,2013</p>",
	description:"<p>In this series of artworks, clothing represents both the commuter and the commute. Art panels above gateways reveal open closets full of clothes. On some panels the clothes are pressed close together, symbolic of the crush of a rush hour commute. Variations in spacing on other panels create alternate relationships between the proximity of clothing, reflecting changes in the commuter flow at different times of day. Artworks above seating areas emphasize the rhythm of sitting and waiting as part of the commute. Clothing is draped over benches creating the impression of a seated figure. On close inspection, the figures are created from multiple bands of fabric and color. These placements form narratives about the people who may have inhabited the clothes and their relationships with the spaces they occupy. The diverse attire is culled from community members and represents a wide range of personalities, professions and cultural influences.</p>",
	statement:"<p>In these vignettes of city life, the clothes create narratives that are telling of how the public spaces we occupy house our lives.</p>",
	artist:"<p><strong>CARMEN ARGOTE</strong> has exhibited her artwork at California State University, Los Angeles; Los Angeles City Hall; The Arboretum of Los Angeles County; Kyoto Grand Hotel; Harvey Levine Gallery; Wight Gallery; USC Roski MFA Gallery and G727. She has taught at California State University, Los Angeles; Inner-City Arts and Heart of Los Angeles. Argote holds a both a Bachelor of Fine Arts degree and a Master of Fine Arts degree from the University of California, Los Angeles (UCLA).</p>",
	image:"https://media.metro.net/photologue/photos/art_Argote.jpg"
}
var expoStation3 = {
	location:"<p>26th Street / Bergamot Station</p>",
	title:"<p>Local Color, 2013</p>",
	description:"<p>Landscapes are overlaid with colorful objects and natural materials gathered on walks in the local area. While these collected discards are often overlooked by passerby, the artist re-presents these materials as the central focus of the landscapes, suggesting that they reveal potential narratives about the people who frequent the area. 26th St/Bergamot Station is located in closed proximity to Bergamot Station Arts Center, a major hub for artistic activity. Each of the intricate landscapes contains subtle references to several art historical periods including: Surrealism, Pop Art, Assemblage and Performance Art in order to connect the station with this nearby cultural destination.</p>",
	statement:"<p>A local landscape overlaid with a wide variety of colorful objects and natural specimens collected on extensive walks around Santa Monica creates eye catching and imaginative evocations of the locales in the vicinity of the station.</p>",
	artist:"<p><strong>CONSTANCE MALLINSON has exhibited her artwork widely, at venues such as The Oakland Museum, Torrance Art Museum, Japanese American National Museum, Los Angeles Municipal Gallery, Palm Springs Desert Museum, and the Downey Museum of Art. Her work is included in collections such as the Los Angeles County Museum of Art, National Academy of Sciences, San Jose Museum of Art, Newport Harbor Art Museum and the Pomona College Museum of Art among others. Mallinson has received numerous awards including a National Endowment for the Arts Artist Fellowship, City of Los Angeles Artist Grant and a Djerassi Foundation Residency Award.</strong></p>",
	image:"https://media.metro.net/photologue/photos/Mallinson_web__local_color.jpg"
}
var expoStation4 = {
	location:"<p>Expo / Bundy Station</p>",
	title:"<p>And Here I Will Stay, 2013</p>",
	description:"<p>A series of art panels are united by a flowing sash, mean to convey the history and vitality of the local neighborhood. At locations facing the entrances to the platform, art panels depict the agricultural area that once existed as well as the present day urban city. A painted sash flows in front of the landscape. The front side depicts images of fabric patterns from a wide range of cultural traditions quilted together with a light blue yarn meant to signify the Expo Line. The back side of the sash contains a painted, abstracted map of the area with a blue line denoting the route of the Expo Line. At locations facing the interior of the platform, people, restaurants and theatres are the focus – drawing attention to the many different kinds of people and businesses that have contributed to the growth of the area.</p>",
	statement:"<p>By including images of the diverse existing community as well as a large veteran population, the pieces will offer a sense of warmth, youthfulness, innovative energy and historical record.</p>",
	artist:"<p><strong>NZUJI DE MAGALHÃES</strong> is a Los Angeles-based artist originally from Angola, Africa. Her work has been exhibited at the Studio Museum in Harlem, New York City; Museum of the African Diaspora, San Francisco; Hammer Museum, Los Angeles and the Boxheart Gallery, Pittsburgh. She earned a Master of Fine Arts from the University of Southern California and a Bachelor of Arts from the University of California, Irvine.</p>",
	image:"https://media.metro.net/photologue/photos/De-Magalhaes_web_and_here_I_will_stay.jpg"
}
var expoStation5 = {
	location:"<p>Expo / Sepulveda Station</p>",
	title:"<p>Right Above The Right-Of-Way, 2013</p>",
	description:"<p>Just as this aerial station provides views of the surrounding areas, the artworks present aerial views of local neighborhoods, depicted in an intricate series of colored pencil drawings. Drawn from photographs that were shot from a helicopter hovering above the city, the images present the structured landscape of the area punctuated with identifiable landmarks. Seen as a body of work, the group of eight art panels reveal a patchwork of growth and development that describe an ever changing civic infrastructure.</p>",
	statement:"<p>While waiting in the station, passengers will be able to see certain landmarks and to get a sense of where they are in a large, dense landscape. The handmade quality of my drawings reflects on the idea that our cities are places that we create and care for together.</p>",
	artist:"<p><strong>SUSAN LOGORECI</strong> has completed public art projects for the Los Angeles International Airport and City National Bank. Her work has been exhibited at venues such as the Museum of Contemporary Art Minsk, Torrance Art Museum, Angels Gate Cultural Center and Cirrus Gallery. Logoreci holds a Master of Fine Arts from California State University, Long Beach and a Bachelor of Fine Arts from the San Francisco Art Institute.</p>",
	image:"https://media.metro.net/photologue/photos/Logoreci_web_above.jpg"
}
var expoStation6 = {
	location:"<p>Westwood / Rancho Park Station</p>",
	title: "<p>Panoramas, 2013</p>",
	description:"<p>Artworks on gateway arches depict the legs of travelers headed to their destinations: a business professional with her rolling briefcase, a parent with a stroller and a hummingbird in flight. Art panels above seating areas present commuters calmly waiting. Looking at the illustrations, the viewer may notice the standing figures combine styles of dress from the past as well as the present, collapsing time and place into a series of narrative stances. Individuals reference the history of the local area: a gardener holds a young boy’s hand as the boy reaches for a dropped origami paper crane, signifying nearby Little Osaka and the many nurseries that once flourished in the area. A wounded soldier in an older style uniform stands on crutches, drawing on the memory of the Sawtelle Veteran’s Home. Each figure is purposefully placed to create a story of place illustrated through the act of commuting.</p>",
	statement:"<p>Scenes of this diverse neighborhood serve as cinematic vistas: panoramas of local commuters, waiting, engaging with one another. Only the shoes show the personality of each commuter. The body language tells their story and their relationship to one another.</p>",
	artist:"<p><strong>ABEL ALEJANDRE</strong> created murals for the 1984 Olympic Games. He has also exhibited his artworks regionally at venues that include Coagula Curatorial Gallery, Avenue 50 Studio, Center for the Arts Eagle Rock, Bamboo Lane Gallery, Tropico de Nopal and the Mexican Cultural Institute. Alejandre holds an Associate of Arts degree from Long Beach City College.</p>",
	image:"http://a.scpr.org/i/14068ca121c692f14df31cb69cfeaea3/127991-full.jpg"
}
expoStations.push(expoStation1, expoStation2, expoStation3, expoStation4, expoStation5, expoStation6);
//test
console.log(expoStations);




