function Search(name, rules=[], onSuccess, propositionCallback) {
    const search = findAtoms($('#input'+name).val(), rules);
    $('#result'+name).empty()

    if(!search) {
        $('#result'+name).html(`<span>Vous n'avez rien entré</span>`);
    } else if(!search.result) {
        $('#result'+name).html(`<span>L\'élément n'existe pas, vérifiez l'orthographe et les accents.</span>`);
        if(search.similars.length!==0) {
            $('#result'+name).append( `
            <span>Essayer avec:
                ${search.similars.map(p=>(` <code class="proposition${name}">${p.n}</code>`))}
            </span>
            `);
            $('.proposition'+name).click(function(){
                $('#input'+name).val($(this).html());
                propositionCallback();
            })
        }
    } else {
        onSuccess(search)
    }
}


function dispLayers(e=null) {
    e!==null && e.preventDefault();

    Search('Layers', ['n', 's'], (search)=>search.first.buildLayers('#resultLayers'), ()=>dispLayers())

}


function dispLewis(e=null){
    e!==null && e.preventDefault();
    
    Search('Lewis', ['n', 'z', 's'], (search)=>search.first.build('#resultLewis'), ()=>dispLewis())
}


function randEl() {
    // génère un atome au hasard
    const atom = new Atom(Math.floor(Math.random() * elements.length));
    
    atom.build('#exElement'); // l'affiche

    // animation
    $('#exElement').animate({
        opacity: 1,
    }, 800, function() {
        setTimeout(() => {
            $('#exElement').animate({
            opacity: 0,
            }, 800, function() {
                randEl()
            });
        }, 2500);
    });
}



// quand la page est chargée
$(()=>{
    randEl(); // commencer l'affichage des élémens au hasard sur la page

    // définition des évenements
    $('#btnGenLewis').click(dispLewis); // générer le schéma de lewis
    $('#btnGenLayers').click(dispLayers); // calculer les couches



    // pour la naviguation
    // fait glisser la vue dans la direction demandée
    $('*[data-action="slide-up"]').click(e=>{
        e.preventDefault();
        $('html,body').animate({scrollTop: 0}, 'slow');
        $(".tools > *").animate({ top:0 }, "slow");
        return false;
    })

    $('*[data-action="slide-down"').click(e=>{
        e.preventDefault();
        $('html,body').animate({scrollTop: 0}, 'slow');
        $(".tools > *").animate({ top:"-100vh" }, "slow");
        return false;
    })
    
    $('.arrow-right').click((e)=>{
        $("#lewis").animate({ left:"-100vw" }, "slow");
        $("#layers").animate({left:0 }, "slow");
        return false;
    })
    
    $('.arrow-left').click((e)=>{
        $("#layers").animate({ left:"100vw" }, "slow", function() {
        });
        $("#lewis").animate({ left:0 }, "slow");
        return false;
    })
});