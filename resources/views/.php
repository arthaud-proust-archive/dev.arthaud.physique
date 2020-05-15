<?php $title = 'Outils de physique'; ?>

<?php ob_start(); ?>
<main class="position-relative overflow-hidden text-center bg-light full-height">
    <div class="tools full-height position-relative">
        <?php include('../layouts/lewis.php'); ?>
            
        <?php include('../layouts/layers.php'); ?>
    </div>

    <?php include('../layouts/technologies.php'); ?>
</main>

<?php $content = ob_get_clean(); ?>
<?php require('../layouts/app.php'); ?>