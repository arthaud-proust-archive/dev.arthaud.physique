<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="content-language" content="fr" />

    <title><?= $title ?></title>

    <script src="/public/js/jquery.js"></script>
    <script src="/public/js/bootstrap.bundle.min.js"></script>
    <script src="/public/js/Atom.js"></script>
    <script src="/public/js/meta.js"></script>
    <link rel="stylesheet" href="/public/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="/public/css/master.css"/>
    <link rel="apple-touch-icon" sizes="57x57" href="/public/img/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/public/img/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/public/img/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/public/img/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/public/img/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/public/img/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/public/img/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/public/img/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/public/img/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/public/img/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/public/img/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/public/img/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/public/img/favicon-16x16.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/public/img/apple-icon-144x144.png">
    <link href="/public/img/favicon.ico" rel="shortcut icon">
</head>
<body>
    <?= $content ?>
    <?php require('footer.php') ?>
</body>
</html>