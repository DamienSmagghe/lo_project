<?php include 'nav__nobtn.php' ?>
<!-- Pas de boutons dans le header normalement, juste retour home -->

    <main class="bg-no-wrapper">
        <div class="small__window sm">
            <h2>Connectez-vous</h2>
            <form class="sm__form" action="#" method="post">
                <label for="id">
	                <p>Identifiant</p>
	                <input id="id" type="text"/>
                </label>
                <label for="password">
	                <p>Mot de passe</p>
	                <input id="password" type="password"/>
                </label>
                <label for="show" class="checkbox__form">
                    <input id="show" type="checkbox">
                    <span class="checked"></span>
                    <p>Afficher mon mot de passe</p>
                </label>
                <label for="remember" class="checkbox__form">
                    <input id="remember" type="checkbox">
                    <span class="checked"></span>
                    <p>Se souvenir de moi</p>
                </label>
                <div class="connect__form">
                    <input type="submit" value="CONNEXION">
                    <a href="#">Mot de passe oublié</a>
                </div>
                <a href="./inscription.php">INSCRIPTION</a>
            </form>
        </div>
    </main>
</body>
</html>