const dbConnection = require("./database");
const Projects = require("./models/projects")

const dummyProject = [
  {
    name: "NYC Public Tennis Courts",
    imageUrl: ["/images/allTags.png", "images/death&Company.png"],

    description: "Locate your nearest outdoor tennis court",
  },
  {
    name: 'test project',
    imageUrl:['/images/pinball.jpeg'],

    description: "this is a project"
  },
  {
    name: 'test project',
    imageUrl:['/images/nightLife.png'],
    description: "this is a project"
  }

];

const runSeed = async () => {
  try {
    await dbConnection.sync({ force: true });
    console.log(`starting seeding`);



    let projects = await Promise.all(
      dummyProject.map((portProject) => {
        return Projects.create(portProject);
      })
    );



    console.log("Database synced!");
    console.log(`seeded successfully`);
    return {

      projects


    };
  } catch (err) {
    console.error("Something went wrong inside: seed()! :S");
    console.error(err);
  }
};

// const runSeed = async () => {


//   await dbConnection.sync({force : true});
//   console.log('Seed is complete!');
//   process.kill(0)

// };

runSeed();
