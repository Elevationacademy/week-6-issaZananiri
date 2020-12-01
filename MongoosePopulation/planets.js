const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/universe', { useNewUrlParser: true })
const Schema = mongoose.Schema
const solarSystemSchema = new Schema
({
    planets: [{type: Schema.Types.ObjectId, ref: 'Planet'}],
    starName: String
})
const planetSchema = new Schema
({
    name: String,
    system: {type: Schema.Types.ObjectId, ref: 'SolarSystem'},
    visitors: [{type: Schema.Types.ObjectId, ref: 'Visitor'}]
})
const visitorSchema = new Schema
({
    name: String,
    homePlanet: {type: Schema.Types.ObjectId, ref: 'Planet'},
    visitedPlanets : [{type: Schema.Types.ObjectId, ref: 'Planet'}]
})
const SolarSystem = mongoose.model("SolarSystem", solarSystemSchema)
const Planet = mongoose.model("Planet", planetSchema)
const Visitor = mongoose.model("Visitor", visitorSchema)

solar = new SolarSystem(
    {
        planets: [],
        starName: "Phenix"
    }
)
planet = new Planet(
    {
        name: "Mercury",
        system: solar,
        visitors: []

    }
)
planet2 = new Planet(
    {
        name: "Earth",
        system: solar,
        visitors: []

    }
)
visitor = new Visitor(
    {
        name: "Aysam",
        homePlanet: planet,
        visitedPlanets: []
    }
)
/*
 visitor.visitedPlanets.push(planet2)
 planet2.visitors.push(visitor)
 solar.planets.push(planet)
 solar.planets.push(planet2)
 solar.save()
 planet.save()
 planet2.save()
 visitor.save()
*/
//First
 Visitor.findOne({}).populate("visitedPlanets").exec(function(err,visitor)
  {
      visitor.visitedPlanets.forEach(vp => console.log(vp))
  })
    //second
	  Planet.findOne({}).skip(1).populate("visitors").exec(function(err, planet) {
	    planet.visitors.forEach(v => console.log(v.name))
     }) 

// third
SolarSystem.findOne({}).populate(
    {   path: "planets",
        populate: 
        {
            path: "visitors"
        }
    }
).exec(function(err,solarSystem)
{      solarSystem.planets.forEach(p => {
        p.visitors.forEach(v => console.log(v.name))
    })
})
