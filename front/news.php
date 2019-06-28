<?php include './header.php' ?>

<main class="page-wrapper">
    <div class="sort__buttons"> 
        <button class="toggle__tri"></button>
        <div class="buttons__list">
            <button class="button__selected">Tous</button>
            <button>Pays Intervenants</button>
            <button>Institutions</button>
        </div>
    </div>
        
    <!-- Articles Dynamique générés en fonction du tri avec les boutons ci-dessus -->
    <div class="all__results">
        <div class="article__bulk__right">
            <span class="article__date">23/06/2019</span>
            <div class="resume">
                <!-- TEXTE DYNAMIQUE -->
                <p>Après les événements qui ont abouti à la destitution (22 février 2014) et à la fuite du président ukrainien (Viktor Ianoukovitch), on a vu émerger un mouvement d’autodéfense en Crimée, où une partie de la population s’est opposée au renversement du régime. Le 17 mars, à l’issue d’un référendum dont la légalité est largement mise en doute, le parlement criméen a proclamé l’indépendance de la Crimée et a demandé son rattachement à la fédération de Russie. Depuis, malgré la signature d’un accord à Genève...</p>
                <a href="article_0.php" class="read__button">lire</a>
            </div>
            <div class="img__block color__indicator__blue">
                <div class="img__frame">
                    <!-- IMAGE DYNAMIQUE -->
                    <img src="./images/crimee.jpg" alt="crimee">
                </div>
                <!-- TITRE DYNAMIQUE -->
                <h3>L’annexion de la Crimée</h3>
                <div class="color__indicator"></div>
            </div>
        </div>
        <div class="article__bulk__left">
            <span class="article__date">23/06/2019</span>
            <div class="resume">
                <!-- TEXTE DYNAMIQUE -->
                <p>Depuis le mois d’août 2017, des centaines de milliers de membres de la communauté ethnique musulmane Rohingya ont fui l’État de Rakhine (Arakan), une région située dans l’ouest de la Birmanie, afin d’échapper à des abus massifs commis par les forces de sécurité du gouvernement. Vers la mi-septembre 2017, environ 400 000 Rohingyas – soit près d’un tiers de la population totale Rohingya de Birmanie, estimée à 1,2 million de personnes – avaient franchi la frontière pour fuir vers le Bangladesh. Des dizaines de milliers d’autres Rohingyas se retrouvent déplacés à l’intérieur de la Birmanie, sans accès à une aide humanitaire vitale. En réponse à une attaque coordonnée menée par un groupe armé rohingya, l’armée birmane a lancé une campagne meurtrière recourant à des bombardements et à des incendies criminels, et qui s’apparente à une forme de nettoyage ethnique.</p>
                <a href="article.php" class="read__button">lire</a>
            </div>
            <div class="img__block color__indicator__blue">
                <div class="img__frame">
                    <!-- IMAGE DYNAMIQUE -->
                    <img src="images/birmanie.jpg" alt="chine">
                </div>
                <!-- TITRE DYNAMIQUE -->
                <h3>La crise des Rohingyas</h3>
            </div>
        </div>
        <div class="article__bulk__right">
            <span class="article__date">05/06/2019</span>
            <div class="resume">
                <!-- TEXTE DYNAMIQUE -->
                <p>Le pays compte 23 millions d’habitants et une superficie de 185 000 km². Il a été établi dans ses frontières actuelles après la Première guerre mondiale, suite au dépeçage de l’Empire ottoman par les Français et les Britanniques, au lendemain des accords de San Remo en 1920. Sous mandat français jusqu’en 1946, la Syrie indépendante a connu des épisodes démocratiques puis des coups d’Etats militaires dont celui du parti Baath en 1963 qui a établi le régime actuel. S’en suit alors un régime politique familial repris pas Bachar-El-Assad en 2000 suite à la mort de son père. Le peuple Syrien était donc sous un régime tyrannique depuis plus de 40 ans.</p>
                <a href="article.php" class="read__button">lire</a>
            </div>
            <div class="img__block color__indicator__blue">
                <div class="img__frame">
                    <!-- IMAGE DYNAMIQUE -->
                    <img src="images/syrie.jpg" alt="chine">
                </div>
                <!-- TITRE DYNAMIQUE -->
                <h3>Le conflit Syrien</h3>
                <div class="color__indicator"></div>
            </div>
        </div>
    </div>
</main>
<script src="./scripts/news.js"></script>

<?php include './footer.php' ?>