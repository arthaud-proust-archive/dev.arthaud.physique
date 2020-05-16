<div id="lewis" class="position-absolute h-100 w-100">
    <div class="position-relative h-100 w-100 d-flex">
        <div class="col-md-7 col-xl-5 p-lg-5 mx-auto box-middle" style="z-index:100">
            <div id="exElement"></div>
            <h1 class="pt-5 mt-3 display-4 font-weight-normal text-shadow-light">Schéma de Lewis </h1>
            <p class="lead font-weight-normal text-shadow-light">Affiche le schéma d'un atome</p>
            <button class="btn btn-outline-dark" data-action="slide-down">Utiliser cet outil</button>
        </div>
        <div class="arrow-right">
            Autre outil <?php include($_SERVER['DOCUMENT_ROOT'].'/public/img/arrow.svg') ?>
        </div>
    </div>
    <div class="position-relative h-100 w-100 d-flex">
        <div class="p-lg-5 mx-auto box-middle" style="z-index:100">
            <div class="mb-3 px-3 pb-3">
                <h2 class="display-5">Schéma de Lewis</h2>
                <p class="lead">Récupérez le schéma de Lewis d'un atome</p>
            </div>
            <form class="m-auto col-10 col-md-8 col-lg-6 col-xl-8 pb-4">
                <label for="inputLewis">Entrez le nom, le symbole ou le nombre d'électrons d'un atome.</label>
                <div class="input-group">
                    <input type="text" class="form-control" id="inputLewis" placeholder="ex: azote" aria-describedby="btnGenLewis">
                    <div class="input-group-append">
                        <button class="btn btn-dark input-group-text" id="btnGenLewis">Calculer</button>
                    </div>
                </div>
            </form>
            <div id="resultLewis" class="rounded p-4 m-auto">
            </div>
        </div>
        <div class="arrow-right">
            Autre outil <?php include($_SERVER['DOCUMENT_ROOT'].'/public/img/arrow.svg') ?>
        </div>
    </div>
</div>