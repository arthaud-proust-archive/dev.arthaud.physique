<?php $title = 'Technologies'; ?>

<?php ob_start(); ?>
<main>
<div class="bg-light pb-5 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden full-height">
    <div class="my-3 p-3 pt-5 mt-3">
        <h2 class="display-3">Technologies utilisées</h2>
    </div>
    <div class="p-3 pt-5">
        <h2 class="h2">Jquery</h2>
        <p class="lead">
            Pour la gestion du DOM.
        </p>
        <h2 class="h2 pt-4">Bootstrap</h2>
        <p class="lead">
            Mise en forme du site. 
        </p>
        
        <h2 class="h2 pt-4">Php</h2>
        <p class="lead">
            Architecture du site.
        </p>
        <a class="btn btn-dark mt-5" href="/">Retour aux outils</a>
    </div>
</main>
<?php $content = ob_get_clean(); ?>

<?php require('../layouts/app.php'); ?>