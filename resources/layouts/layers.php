<div id="layers" class="position-absolute h-100 w-100" style="left:100vw">
    <div class="position-relative h-100 w-100 d-flex">
        <div class="col-md-7 col-xl-5 p-lg-5 mx-auto box-middle">
            <h1 class="pt-5 mt-3 display-4 font-weight-normal text-shadow-light">Structure électronique</h1>
            <p class="lead font-weight-normal text-shadow-light">Calcule les couches électroniques d'un atome</p>
            <button class="btn btn-outline-dark" data-action="slide-down">Utiliser cet outil</button>
        </div>
        <div class="arrow-left">
            <?php include($_SERVER['DOCUMENT_ROOT'].'/assets/img/arrow.svg') ?>
        </div>
    </div>
    <div class="position-relative h-100 w-100 d-flex">
        <div class="p-lg-5 mx-auto box-middle" style="z-index:100">
            <div class="mb-3 px-3 pb-3">
                <h2 class="display-5">Structure électronique</h2>
                <p class="lead">L'algorithme de recherche de sous-couches électroniques procède suivant la <a target="blank" href="https://fr.wikipedia.org/wiki/R%C3%A8gle_de_Klechkowski">règle de Klechkowski</a></p>
            </div>
            <form class="m-auto col-10 col-md-8 col-lg-6 col-xl-8 pb-4">
                <label for="inputLayers">Entrez le nom ou le symbole d'un atome.</label>
                <div class="input-group">
                    <input type="text" class="form-control" id="inputLayers" placeholder="ex: azote" aria-describedby="btnGenLayers">
                    <div class="input-group-append">
                        <button class="btn btn-dark input-group-text" id="btnGenLayers">Calculer</button>
                    </div>
                </div>
            </form>
            <div id="resultLayers" class="rounded p-4 m-auto">
            </div>
        </div>
        <div class="arrow-left">
            <?php include($_SERVER['DOCUMENT_ROOT'].'/assets/img/arrow.svg') ?>
        </div>
    </div>
</div>