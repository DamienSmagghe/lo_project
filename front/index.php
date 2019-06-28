<?php include 'header.php' ?>

<div class="map"></div>
<div class="map__legend">
    <div class="legend__0">
        <div class="color__interventions"></div>
        <p>Indique du plus clair au plus foncé qui intervient le plus.</p>
    </div>
    <div class="legend__1">
        <div class="color__conflict"></div>
        <p>Indique les pays où il y a intervention de la part d'un autre Etat ou institution.</p>
    </div>
</div>
<div class="country__infos">
    <div class="infos__raw">
        <!-- Titre mis à jour dynamiquement -->
        <div>
            <small>France</small>
        </div>
        <!-- Description mis à jour dynamiquement -->
        <p>La france est un pays de l’union européenne, elle intervient à ce jour dans près de 10 pays et n’est pas en conflit au sein de son territoire.</p>
        <a href="article.php">En savoir plus</a>
    </div>
</div>
<div class="country__articles">
    <div class="articles__raw">
        <!-- France est une variable mis à jour dynamiquement -->
        <small>Dernières infos sur la France</small>
        <div class="small__article">
            <img src="images/france.jpg" alt="la france">
            <p>Lorem ipsum dolor amet tacos flexitarian flannel yuccie taxidermy tattooed schlitz scenester.</p>
        </div>
        <a href="news.php">Lire plus d'articles</a>
    </div>
</div>
<div class="country__dataviz">
    <p>Interventions dans le monde</p>
    <div class="chart__viz"></div>
</div>
<p class="scroll__indicator">scroll</p>
<main class="page-wrapper">
    <h2 class="page-title">Les informations du moment</h2>
    <div class="new__articles">
        <div class="big__article">
            <!-- Titre dynamique -->
            <h3>L’annexion de la Crimée</h3>
            <div class="img__frame">
                <!-- Image dynamique -->
                <img src="images/crimee.jpg" alt="crimée">
            </div>
            <!-- Texte dynamique -->
            <p>Lors de la tentative d’annexion de la crimée ainsi que d’une partie de l’ouest de l’ukraine, un conflit armée s’installe...</p>
            <!-- Liens dynamique -->
            <a class="read__button" href="article_0.php">lire</a>
        </div>
        <div class="column__articles">
            <div class="article">
                <!-- Titre dynamique -->
                <h4>La crise des Rohingyas</h3>
                <div class="img__frame">
                    <!-- Image dynamique -->
                    <img src="images/birmanie.jpg" alt="éthiopie">
                </div>
                <!-- Texte dynamique -->
                <p>Un nouveau mouvement de violence est apparu dans l’Etat d’Arakan en 2017 après l’attaque d’une vingtaine de postes-frontières...</p>
                <!-- Liens dynamique -->
                <a class="read__button" href="article.php">lire</a>
            </div>
            <div class="article">
                <!-- Titre dynamique -->
                <h5>Le conflit Syrien</h5>
                <div class="img__frame">
                    <!-- Image dynamique -->
                    <img src="images/syrie.jpg" alt="chine">
                </div>
                <!-- Texte dynamique -->
                <p>Les forces gouvernementales, loyalistes au régime de Bachar Al-Assad comprennent aujourd’hui...</p>
                <!-- Liens dynamique -->
                <a class="read__button" href="article_2.php">lire</a>
            </div>
        </div>
    </div>
</main>
<script src="https://d3js.org/d3.v4.min.js"></script>
<script src="https://d3js.org/topojson.v2.min.js"></script>
<script src="https://d3js.org/d3-queue.v3.min.js"></script>
<script type="module" src="./scripts/app.js"></script>

<?php include 'footer.php' ?>