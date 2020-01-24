// More info about config & dependencies:
// - https://github.com/hakimel/reveal.js#configuration
// - https://github.com/hakimel/reveal.js#dependencies
Reveal.initialize({
  width: "100%",
  height: "100%",
  margin: 0,
  minScale: 1,
  maxScale: 1,
  dependencies: [
    { src: "plugin/markdown/marked.js" },
    { src: "plugin/markdown/markdown.js" },
    { src: "plugin/notes/notes.js", async: true },
    { src: "plugin/highlight/highlight.js", async: true }
  ]
});

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618"
      }
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains"
    }
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653"
      }
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications"
    }
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990"
      }
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services"
    }
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342"
      }
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems"
    }
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      geo: {
        lat: "-71.4197",
        lng: "71.7478"
      }
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "Considine-Lockman",
      catchPhrase: "Synchronised bottom-line interface",
      bs: "e-enable innovative applications"
    }
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      geo: {
        lat: "24.8918",
        lng: "21.8984"
      }
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: {
      name: "Johns Group",
      catchPhrase: "Configurable multimedia task-force",
      bs: "generate enterprise e-tailers"
    }
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
      geo: {
        lat: "-14.3990",
        lng: "-120.7677"
      }
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
      name: "Abernathy Group",
      catchPhrase: "Implemented secondary concept",
      bs: "e-enable extensible e-tailers"
    }
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      geo: {
        lat: "24.6463",
        lng: "-168.8889"
      }
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "Yost and Sons",
      catchPhrase: "Switchable contextually-based project",
      bs: "aggregate real-time technologies"
    }
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232"
      }
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models"
    }
  }
];

document.querySelectorAll('a[href="#"]').forEach(link =>
  link.addEventListener("click", e => {
    e.preventDefault();
  })
);

const designModeToggle = () => {
  document.designMode = document.designMode === "off" ? "on" : "off";
};

const loggingLog = () => {
  console.log("Hello world!");
};

const loggingWarn = () => {
  console.warn("Uhh... a warning!");
};
const loggingError = () => {
  console.error("Bye bye world :(");
};
const loggingArray = () => {
  console.log(users);
};
const loggingTable = () => {
  console.table(users);
};
const loggingTrace = () => {
  const multiply = (a, b) => {
    console.trace(a * b);
  };

  multiply(5, 10);
};
const loggingTableFields = () => {
  console.table(users, ["id", "name", "email"]);
};
const loggingGroup = function() {
  const label = "Menu items";
  const labelItem = "Projects";
  console.group(label);
  console.log("Home");
  console.groupCollapsed(labelItem);
  console.log("Banking");
  console.log("Digital");
  console.log("Internal");
  console.groupEnd(labelItem);
  console.log("About us");
  console.log("Contact");
  console.groupEnd(label);
};

const loggingStyle = () => {
  console.log(
    "%cHello world!\u{1F44B} \u{1F30D}",
    "font-size:4em; color: red; background:yellow; padding: 8px;border-radius:10px; border: solid 6px red; text-align: center"
  );
};

const copyToClipboard = str => {
  const el = document.createElement("textarea");
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

const lastResult = () => copyToClipboard('users.map(e => (e.name)).filter(e=> e.includes("r"))');
const qSelector = () => copyToClipboard('$("#document-query-selector")');
const qSelectorAll = () => copyToClipboard('$$("#utilities-api-list .fragment")');
const monitorFn = () => copyToClipboard("function mySumFn(x, y) { return (x + 2 *y);}\nmonitor(mySumFn)");
const monitorEventsFn = () => copyToClipboard('monitorEvents($("#monitor-events-link"), "click")');

const breakpoints = () => {
  debugger;
  const addresses = users.map(user => {
    const { address } = user;
    return `${address.street}, ${address.zipcode} ${address.city.toUpperCase()}.`;
  });
  return addresses;
};

const xhrCall = () => {
  fetch("https://pokeapi.co/api/v2/pokemon/pikachu/");
  fetch("https://pokeapi.co/api/v2/ability/3/");
};

const exceptions = () => {
  const value = 6;
  value = 8;
};

const caughtExceptions = () => {
  try {
    const label = "my String";
    label = "new my string";
  } catch {
    console.warn("label not defined");
  }
};

const randomSum = () => {
  const a = Math.random() * 20;
  const b = Math.random() * 100;
  console.log(`Sum is ${a + b}`);
};

const svg = `
<svg width="200" height="200" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 50 55" style="enable-background:new 0 0 50 50;" xml:space="preserve">
<style type="text/css">
  .st0{fill:#FDDA3E;}
  .st1{fill:#FFFFFF;}
  .bounce{
    transform-origin: center center;
    animation-name: bounce;
    animation-duration: 720ms;
    animation-timing-function: cubic-bezier(.25,.72,.15,1.17);
    animation-iteration-count: infinite;
  }
  @keyframes bounce {
    0%, 50%, 100% {
      transform:
        rotate3d(0, 0, 0, 0deg)
        translate3d(0, 5px, 0);
    }
    20% {
      transform:
        rotate3d(0, 0, 1, 4deg)
        translate3d(0, 0, 0);
    }
    70% {
      transform:
        rotate3d(0, 0, 1, -4deg)
        translate3d(0, 0, 0);
    }
  }
</style>
<g class="bounce">
  <circle class="st0" cx="25" cy="25" r="25"/>
  <polygon points="44.5,21 3.9,21 3.9,24.3 5.7,24.3 5.7,25.9 7.1,25.9 7.1,27.4 8.8,27.4 8.8,29 20.2,29 20.2,27.4 21.8,27.4
        21.8,25.9 23.4,25.9 23.4,24.3 26.7,24.3 26.7,25.9 28.2,25.9 28.2,27.4 29.8,27.4 29.8,29 41.2,29 41.2,27.4 42.8,27.4
        42.8,25.9 44.5,25.9 44.5,24.3 44.5,24.2 46.1,24.2 46.1,22.6 46.1,21"/>
  <rect x="7.1" y="22.5" class="st1" width="1.6" height="1.6"/>
  <rect x="10.5" y="22.5" class="st1" width="1.6" height="1.6"/>
  <rect x="8.8" y="24.2" class="st1" width="1.6" height="1.6"/>
  <rect x="12.1" y="24.2" class="st1" width="1.6" height="1.6"/>
  <rect x="10.5" y="25.8" class="st1" width="1.6" height="1.6"/>
  <rect x="13.8" y="25.8" class="st1" width="1.6" height="1.6"/>
  <rect x="28.2" y="22.5" class="st1" width="1.6" height="1.6"/>
  <rect x="31.5" y="22.5" class="st1" width="1.6" height="1.6"/>
  <rect x="29.8" y="24.2" class="st1" width="1.6" height="1.6"/>
  <rect x="33.1" y="24.2" class="st1" width="1.6" height="1.6"/>
  <rect x="31.5" y="25.8" class="st1" width="1.6" height="1.6"/>
  <rect x="34.8" y="25.8" class="st1" width="1.6" height="1.6"/>
</g>
</svg>
`;

const svgDataUrl = `data:image/svg+xml;base64,${btoa(svg)}`;

Reveal.addEventListener("thanks", function() {
  console.clear();
  console.log(
    "%cThank you, that's all!!",
    `
  background-image: url(${svgDataUrl});
  
  padding: 20px 10px 240px 10px;
  font-family: "Open Sans", sans-serif;
  color: #c3e844;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 800;
  line-height: 1.5;
  text-shadow: rgb(68, 68, 68) 3px 2px 0px;
  border: 15px double rgb(255, 255, 255);
  background-size: 200px;
  background-color: #263550;
  background-position: 50% 80%;
  background-repeat: no-repeat;
  font-size: 50px;
  text-align: center;
  border-radius: 15px;

`
  );
});
