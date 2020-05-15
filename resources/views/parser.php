<?php $title = 'Parseur de tableau périodique'; ?>

<?php ob_start(); ?>
<main>
    <div class="bg-light pb-5 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden full-viewheight">
        <form class="m-auto col-md-5 col-lg-4 col-xl-3">
            <label for="inputMol">Entrez l'atome.</label>
            <div class="input-group">
                <input autofocus type="text" class="form-control" id="inputMol" placeholder="ex: Hydrogène" aria-describedby="buttonMolGen">
                <div class="input-group-append">
                    <button class="btn btn-dark input-group-text" id="buttonMolGen">Parse</button>
                </div>
            </div>
        </form>
        <div id="result" class=" rounded p-4 w-50 m-auto">
        </div>
    </div>
</main>
<script>
$(()=>{
    $('body').keypress((e)=>{
        e.preventDefault();
        let input = $('#inputMol').val().split('	'); 
        const atom = `{z: ${input[0]}, s: '${input[2]}', a: ${+parseFloat(input[3].split(' ')[0].replace(',', '.')).toFixed(3)}, n: '${input[1]}'},\n`;
        // const atom = `{z: ${input[0]}, s: '${input[2]}', a: 'inconnu', n: '${input[1]}'},\n`;
        $('#result').append(atom+"<br>");
        $('#inputMol').val('')
        navigator.permissions.query({name: "clipboard-write"}).then(result => { 
            if (result.state == "granted" || result.state == "prompt") {
                navigator.clipboard.writeText(atom)
            }
        });
    });
});
</script>

<?php $content = ob_get_clean(); ?>
<?php require('../layouts/app.php'); ?>