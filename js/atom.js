// tableau des éléments
// copié/collé et mis en forme d'objet à partir de la page 
// https://fr.wikipedia.org/wiki/Liste_des_%C3%A9l%C3%A9ments_chimiques
// avec le script js de la page parser.php
const elements = [
    {z: 1, s: 'H', a:1.01, n: 'Hydrogène'},
    {z: 2, s: 'He', a:4.0026, n: 'Hélium'},
    {z: 3, s: 'Li', a:6.94, n: 'Lithium'},
    {z: 4, s: 'Be', a:9.0122 , n:'Béryllium'},
    {z: 5, s: 'B', a: 10.81, n:'Bore'},
    {z: 6, s: 'C', a: 12.011, n:'Carbone'},
    {z: 7, s: 'N', a: 14.007, n:'Azote'},
    {z: 8, s: 'O', a: 15.999, n:'Oxygène'},
    {z: 9, s: 'F', a: 18.998, n:'Fluor'},
    {z: 10, s: 'Ne', a: 20.180, n:'Néon'},
    {z: 11, s: 'Na', a: 22.990, n:'Sodium'},
    {z: 12, s: 'Mg', a: 24.305, n:'Magnésium'},
    {z: 13, s: 'Al', a: 26.982, n:'Aluminium'},
    {z: 14, s: 'Si', a: 28.085, n:'Silicium'},
    {z: 15, s: 'P', a: 30.074, n:'Phosphore'},
    {z: 16, s: 'S', a: 32.06, n:'Soufre'},
    {z: 17, s: 'Cl', a: 35.5, n:'Chlore'},
    {z: 18, s: 'Ar', a: 39.948, n:'Argon'},
    {z: 19, s: 'K', a: 39.098, n: 'Potassium'},
    {z: 20, s: 'Ca', a: 40.078, n: 'Calcium'},
    {z: 21, s: 'Sc', a: 44.955, n: 'Scandium'},
    {z: 22, s: 'Ti', a: 47.88, n: 'Titane'},
    {z: 23, s: 'V', a: 50.941, n: 'Vanadium'},
    {z: 24, s: 'Cr', a: 51.996, n: 'Chrome'},
    {z: 25, s: 'Mn', a: 54.938, n: 'Manganèse'},
    {z: 26, s: 'Fe', a: 55.847, n: 'Fer'},
    {z: 27, s: 'Co', a: 58.933, n: 'Cobalt'},
    {z: 28, s: 'Ni', a: 58.69, n: 'Nickel'},
    {z: 29, s: 'Cu', a: 63.546, n: 'Cuivre'},
    {z: 30, s: 'Zn', a: 65.39, n: 'Zinc'},
    {z: 31, s: 'Ga', a: 69.723, n: 'Gallium'},
    {z: 32, s: 'Ge', a: 72.61, n: 'Germanium'},
    {z: 33, s: 'As', a: 74.921, n: 'Arsenic'},
    {z: 34, s: 'Se', a: 78.96, n: 'Sélénium'},
    {z: 35, s: 'Br', a: 79.904, n: 'Brome'},
    {z: 36, s: 'Kr', a: 83.8, n: 'Krypton'},
    {z: 37, s: 'Rb', a: 85.468, n: 'Rubidium'},
    {z: 38, s: 'Sr', a: 87.62, n: 'Strontium'},
    {z: 39, s: 'Y', a: 88.905, n: 'Yttrium'},
    {z: 40, s: 'Zr', a: 91.224, n: 'Zirconium'},
    {z: 41, s: 'Nb', a: 92.906, n: 'Niobium'},
    {z: 42, s: 'Mo', a: 95.94, n: 'Molybdène'},
    {z: 43, s: 'Tc', a: 98.906, n: 'Technétium'},
    {z: 44, s: 'Ru', a: 101.07, n: 'Ruthénium'},
    {z: 45, s: 'Rh', a: 102.906, n: 'Rhodium'},
    {z: 46, s: 'Pd', a: 106.42, n: 'Palladium'},
    {z: 47, s: 'Ag', a: 107.868, n: 'Argent'},
    {z: 48, s: 'Cd', a: 112.411, n: 'Cadmium'},
    {z: 49, s: 'In', a: 114.82, n: 'Indium'},
    {z: 50, s: 'Sn', a: 118.71, n: 'Étain'},
    {z: 51, s: 'Sb', a: 121.75, n: 'Antimoine'},
    {z: 52, s: 'Te', a: 127.6, n: 'Tellure'},
    {z: 53, s: 'I', a: 126.904, n: 'Iode'},
    {z: 54, s: 'Xe', a: 131.29, n: 'Xénon'},
    {z: 55, s: 'Cs', a: 132.905, n: 'Césium'},
    {z: 56, s: 'Ba', a: 137.327, n: 'Baryum'},
    {z: 57, s: 'La', a: 138.905, n: 'Lanthane'},
    {z: 58, s: 'Ce', a: 140.115, n: 'Cérium'},
    {z: 59, s: 'Pr', a: 140.907, n: 'Praséodyme'},
    {z: 60, s: 'Nd', a: 144.24, n: 'Néodyme'},
    {z: 61, s: 'Pm', a: 146.915, n: 'Prométhium'},
    {z: 62, s: 'Sm', a: 150.36, n: 'Samarium'},
    {z: 63, s: 'Eu', a: 151.965, n: 'Europium'},
    {z: 64, s: 'Gd', a: 157.25, n: 'Gadolinium'},
    {z: 65, s: 'Tb', a: 158.925, n: 'Terbium'},
    {z: 66, s: 'Dy', a: 162.5, n: 'Dysprosium'},
    {z: 67, s: 'Ho', a: 164.93, n: 'Holmium'},
    {z: 68, s: 'Er', a: 167.26, n: 'Erbium'},
    {z: 69, s: 'Tm', a: 168.934, n: 'Thulium'},
    {z: 70, s: 'Yb', a: 173.04, n: 'Ytterbium'},
    {z: 71, s: 'Lu', a: 174.967, n: 'Lutécium'},
    {z: 72, s: 'Hf', a: 178.49, n: 'Hafnium'},
    {z: 73, s: 'Ta', a: 180.948, n: 'Tantale'},
    {z: 74, s: 'W', a: 183.85, n: 'Tungstène'},
    {z: 75, s: 'Re', a: 186.207, n: 'Rhénium'},
    {z: 76, s: 'Os', a: 190.2, n: 'Osmium'},
    {z: 77, s: 'Ir', a: 192.22, n: 'Iridium'},
    {z: 78, s: 'Pt', a: 195.08, n: 'Platine'},
    {z: 79, s: 'Au', a: 196.966, n: 'Or'},
    {z: 80, s: 'Hg', a: 200.59, n: 'Mercure'},
    {z: 81, s: 'Tl', a: 204.383, n: 'Thallium'},
    {z: 82, s: 'Pb', a: 207.2, n: 'Plomb'},
    {z: 83, s: 'Bi', a: 208.98, n: 'Bismuth'},
    {z: 84, s: 'Po', a: 208.982, n: 'Polonium'},
    {z: 85, s: 'At', a: 209.987, n: 'Astate'},
    {z: 86, s: 'Rn', a: 222.018, n: 'Radon'},
    {z: 87, s: 'Fr', a: 223.02, n: 'Francium'},
    {z: 88, s: 'Ra', a: 226.025, n: 'Radium'},
    {z: 89, s: 'Ac', a: 227.028, n: 'Actinium'},
    {z: 90, s: 'Th', a: 232.038, n: 'Thorium'},
    {z: 91, s: 'Pa', a: 231.036, n: 'Protactinium'},
    {z: 92, s: 'U', a: 238.029, n: 'Uranium'},
    {z: 93, s: 'Np', a: 237.048, n: 'Neptunium'},
    {z: 94, s: 'Pu', a: 244.064, n: 'Plutonium'},
    {z: 95, s: 'Am', a: 243.061, n: 'Américium'},
    {z: 96, s: 'Cm', a: 247.07, n: 'Curium'},
    {z: 97, s: 'Bk', a: 247.07, n: 'Berkélium'},
    {z: 98, s: 'Cf', a: 251.08, n: 'Californium'},
    {z: 99, s: 'Es', a: 252.083, n: 'Einsteinium'},
    {z: 100, s: 'Fm', a: 257.095, n: 'Fermium'},
    {z: 101, s: 'Md', a: 258.099, n: 'Mendélévium'},
    {z: 102, s: 'No', a: 259.101, n: 'Nobélium'},
    {z: 103, s: 'Lr', a: 260.105, n: 'Lawrencium'},
    {z: 104, s: 'Rf', a: 261.109, n: 'Rutherfordium'},
    {z: 105, s: 'Db', a: 262.114, n: 'Dubnium'},
    {z: 106, s: 'Sg', a: 263.118, n: 'Seaborgium'},
    {z: 107, s: 'Bh', a: 262.123, n: 'Bohrium'},
    {z: 108, s: 'Hs', a: 265, n: 'Hassium'},
    {z: 109, s: 'Mt', a: 266, n: 'Meitnérium'},
    {z: 110, s: 'Ds', a: 269, n: 'Darmstadtium'},
    {z: 111, s: 'Rg', a: 272, n: 'Roentgenium'},
    {z: 112, s: 'Cn', a: 277, n: 'Copernicium'},
    {z: 113, s: 'Nh', a: 286, n: 'Nihonium'},
    {z: 114, s: 'Fl', a: 'inconnu', n: 'Flérovium'},
    {z: 115, s: 'Mc', a: 'inconnu', n: 'Moscovium'},
    {z: 116, s: 'Lv', a: 'inconnu', n: 'Livermorium'},
    {z: 117, s: 'Ts', a: 'inconnu', n: 'Tennesse'},
    {z: 118, s: 'Og', a: 'inconnu', n: 'Oganesson'}
];




function findAtoms(input, rules=['n']) {
    if(input == "") return false;

    input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();   // Upper only the first letter, lower others
    
    let atoms = rules.map(rule=>{
        if(rule =="z" || rule == "a") {
            return(elements.filter(element=>element[rule] == parseFloat(input)));
        } else {
            return(elements.filter(element=>element[rule].toLowerCase() == input.toLowerCase()));
        }
    }).flat();

    
    let result = atoms.length!==0;
    let first = result?new Atom(atoms[0].z):null;
    console.log([atoms[0], first])

    let similars = rules.map(rule=>{
        if(rule =="z" || rule == "a") {
            return(elements.filter(element=>Math.round(element[rule]) == parseInt(input)));
        } else {
            return(elements.filter(element=>element[rule].toLowerCase().startsWith(input.toLowerCase())));
        }
    }).flat();
    
    return {result, first, atoms, similars};
}


class Atom {
    constructor(z) {
        this.z = z;

        this.rules = {
            sublayerMaxE: {s:2,p:6,d:10,f:14,g:18},
            layersName: ["K","L","M","N","O","P","Q","R"]
        }
    }

    get s() {return(elements[this.z-1].s)};
    get a() {return(elements[this.z-1].a)};
    get n() {return(elements[this.z-1].n)};



    
    /* Retourne les couches de l'atome  */
    get layers() {
        this.sublayers= [['1s',0],['2s',0],['2p',0],['3s',0],['3p',0],['4s',0],['3d',0],['4p',0],['5s',0],['4d',0],['5p',0],['6s',0],['4f',0],['5d',0],['6p',0],['7s',0],['5f',0],['6d',0],['7p',0],['8s',0]];

        let n = 0; // n° de la couche actuelle
        let layers = []; // couches de l'atome
        let getSub = (n) => (this.sublayers.filter(sub=>parseInt(sub[0][0]) == n)); // récupérer les sous-couches de la couche n
        let getE = (n) => { // calcule le nombre d'électrons sur cette couche
            let sub = getSub(n)
            if(sub.length==0) return 0
            if(sub.length==1) return sub[0][1]
            return sub.reduce((prev, current)=>(isNaN(prev)?prev[1]+current[1]:prev+current[1]))
        };
            
        // calcul des sous-couches
        for (let i=1; i<=this.z; i++) { // z est aussi le nombre d'atomes. on ajoute un par un les atomes à chaque couche
            if(this.sublayers[n][1] < this.rules.sublayerMaxE[this.sublayers[n][0].slice(-1)]) { // si la sous-couche n'est pas remplie
                this.sublayers[n][1]++; // on ajoute un électron
            } else { // sinon, on passe à la couche suivante
                n+=1;
                this.sublayers[n][1]++; // à laquelle on rajoute l'électron actuel
            }
        }

        // calcul des couches qui possèdent des électrons
        for(let i=1; i<=this.rules.layersName.length;i++) {
            if(getE(i)!==0) layers.push({ // si la couche possède au moins un électron on l'ajoute
                n: this.rules.layersName[i-1],
                e: getE(i), // nombre d'électrons de cette couche
                sub: getSub(i) // sous-couches
            });
        }

        return layers;
    }



    /* Renvoie les électrons de la dernière sous-couche de l'atome en format html */
    get electronsToHtml() {
        let html=""; // le code html qui sera renvoyé
        const layers = this.layers; // copie des sous-couches pour ne pas recalculer à chaque fois
        let n = layers[layers.length-1].e;

        while(n>8) {
            n-=8;
        }

        if(n<=4) {
            for(let i=1; i<n+1; i++) {
                html+=`<div class="elec-${i} single"></div>`;
            }
        } else {
            let j=1;
            for(j; j<n-3; j++) {
                html+=`<div class="elec-${j} double"></div>`;
            }
            for(j; j<=4; j++) {
                html+=`<div class="elec-${j} single"></div>`;
            }
        }
        return html;
    }


    build(element) {
        $(element).html(`
            <div class="element">
                <span>${this.s}</span>
                ${this.electronsToHtml}
            </div>
        `);
    }

    buildLayers(element) {
        let layers = this.layers;
        $(element).html(`
            <p class="h2">
                ${
                    layers.map(layer=>{
                        if(layer.e!==0) return(` ${layer.n}<sup>${layer.e}</sup>`)
                    }).join(' ')
                }
            </p>
            <p>
                Sous-couches: ${
                    layers.map(layer=>{
                        if(layer.e==0) return ''
                        return layer.sub.map(sublayer=>{
                            return(` ${sublayer[0]}<sup>${sublayer[1]}</sup>`)
                        }).join(' ')
                    }).join(' ')
                }
            </p>
        `);
    }
}