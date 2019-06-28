<?php include 'nav__nobtn.php' ?>
<!-- Pas de boutons dans le header normalement, juste retour home -->

    <main class="bg-no-wrapper">
        <div class="big__window">
            <h2>Abonnez-vous</h2>
            <div class="cards__subscribe width__eight">
                <div class="payment__infos">
                    <form action="post">
                        <label for="id_card">
	                        <p>Numéro de carte</p>
	                        <input id="id_card" type="text"/>
                        </label>
                        <label for="name">
	                        <p>Nom du titulaire de la carte</p>
	                        <input id="name" type="text"/>
                        </label>
                        <div class="small__to__complete">
                            <label for="date">
	                            <p>Date d'expiration</p>
	                            <input id="date" type="text"/>
                            </label>
                            <label for="cvv">
	                            <p>CVV</p>
	                            <input id="cvv" type="text"/>
                            </label>
                        </div>
                        <label for="remember" class="checkbox__form">
                            <input id="remember" type="checkbox">
                            <span class="checked"></span>
                            <p>Se souvenir de mes informations de paiement</p>
                        </label>
                    </form>
                </div>
                <!-- ABONNEMENT CHOISIT AFFICHE EN DYNAMIQUE -->
                <div class="sub__unique__card selected__card">
                    <h3>Formule Essaie</h3>
                    <ul>
                        <li>Accès à tous les articles</li>
                        <li>Permission d’utiliser les datavisualisations misent à disposition pour usage pro</li>
                    </ul>
                    <div class="prices">
                        <div class="subscription__price">
                            <p>7.99€</p>
                            <span>/ mois</span>
                        </div> 
                        <small>engagement 1 mois</small>
                    </div> 
                </div>
            </div>
            <a class="sub__to left" href="thanks.php">Je m'abonne</a>
        </div>
    </main>
</body>
</html>