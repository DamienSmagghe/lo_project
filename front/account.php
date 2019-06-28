<?php include 'header.php' ?>

    <main class="page-wrapper">
        <h2 class="page-title ">Mon compte</h2>
        <div class="content__account">
            <div class="col__infos__account">
                <!-- Dynamique Image de profil -->
                <img class="avatar" src="https://avatars.dicebear.com/v2/male/bernard_23.svg" alt="avatar">
                <!-- Dynamique Username -->
                <small class="pseudo">Bernard_23</small>
                <!-- Dynamique Description de l'utilisateur -->
                <p>The Internet's busiest music nerd.</p>
            </div>
            <div class="col__infos__account">
                <!-- Dynamique si compte premium -->
                <p class="premium">Compte non premium</p>
                <!-- Dynamique Mail -->
                <p class="mail">mail@mail.com</p>    
                <label class="activate" for="activate">
                    <p>Activer votre compte</p>
                    <input type="text" name="activate" id="activate">
                </label>
                <input type="submit" value="ACTIVER">
            </div>
        </div>
    </main>
    
<?php include './footer.php' ?>