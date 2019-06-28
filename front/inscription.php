<?php include 'nav__nobtn.php' ?>
<!-- Pas de boutons dans le header normalement, juste retour home -->

    <main class="bg-no-wrapper">
        <div class="small__window">
            <h2>Inscrivez-vous</h2>
            <form action="#" method="post">
                <label for="email">
	                <p>E-mail</p>
	                <input id="email" type="email"/>
                </label>
                <label for="id">
	                <p>Identifiant</p>
	                <input id="id" type="text"/>
                </label>
                <label for="password">
	                <p>Mot de passe</p>
	                <input id="password" type="password"/>
                </label>
                <label for="confirmation">
	                <p>Confirmer mot de passe</p>
	                <input id="confirmation" type="password"/>
                </label>
                <label for="newsletter" class="checkbox__form">
                    <input id="newsletter" type="checkbox">
                    <span class="checked"></span>
                    <p>Oui, je souhaite m'abonner à la <br>newsletter Data Conflict</p>
                </label>
                <div class="signin__with">
                    <a href="#">
                        <img src="./images/google.png" alt="logo google">
                        Google
                    </a>
                    <a href="#">
                        <img src="./images/facebook.png" alt="logo facebook">
                        Facebook
                    </a>
                </div>
                <input type="submit" value="INSCRIPTION">
            </form>
        </div>
    </main>
</body>
</html>