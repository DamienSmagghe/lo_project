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
            <small></small>
        </div>
        <!-- Description mis à jour dynamiquement -->
        <p></p>
        <div class="button-wrapper">
        <a class="primary-button" href="article.php">En savoir plus</a>
        </div>
        
    </div>
</div>
<div class="country__articles">
    <div class="articles__raw">
        <!-- France est une variable mis à jour dynamiquement -->
        <small>Dernières infos sur la France</small>
        <div class="small__article">
            <img src="images/france.jpg" alt="la france">
        </div>
        <div class="button-wrapper">
        <a class="primary-button" href="news.php">En savoir plus</a>
        </div>
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
            <h3>France</h3>
            <div class="img__frame">
                <!-- Image dynamique -->
                <img src="images/france.jpg" alt="france">
            </div>
            <!-- Texte dynamique -->
            <p>Les combattants de conflits armés doivent être jugés selon les conventions de Genève. Les conventions de Genève en 1949 indiquent la...</p>
            <!-- Liens dynamique -->
            <a class="read__button" href="article.php">lire</a>
        </div>
        <div class="column__articles">
            <div class="article">
                <!-- Titre dynamique -->
                <h4>Éthiopie</h3>
                <div class="img__frame">
                    <!-- Image dynamique -->
                    <img src="images/ethiopie.jpg" alt="éthiopie">
                </div>
                <!-- Texte dynamique -->
                <p>Après l'ouverture de la frontière en septembre 2018 entre l'Éthiopie et ... plus les stigmates lépreux de ce conflit qui a coûté la vie à près de 80...</p>
                <!-- Liens dynamique -->
                <a class="read__button" href="article.php">lire</a>
            </div>
            <div class="article">
                <!-- Titre dynamique -->
                <h5>Chine</h5>
                <div class="img__frame">
                    <!-- Image dynamique -->
                    <img src="images/chine.jpg" alt="chine">
                </div>
                <!-- Texte dynamique -->
                <p>Menaces après menaces, les deux premières puissances économiques et militaires de la planète prennent le chemin d'un affrontement...</p>
                <!-- Liens dynamique -->
                <a class="read__button" href="article.php">lire</a>
            </div>
        </div>
    </div>
</main>
<script src="https://d3js.org/d3.v4.min.js"></script>
<script src="https://d3js.org/topojson.v2.min.js"></script>
<script src="https://d3js.org/d3-queue.v3.min.js"></script>
<script type="module" src="./scripts/app.js"></script>

<?php include 'footer.php' ?>