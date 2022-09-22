<template>
    <router-view />
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
//fonts
@font-face {
    font-family: 'IBM Plex Sans';
    src: url('./assets/fonts/IBMPlexSans-Italic.eot');
    src: local('IBM Plex Sans Italic'), local('IBMPlexSans-Italic'),
        url('./assets/fonts/IBMPlexSans-Italic.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/IBMPlexSans-Italic.woff') format('woff'),
        url('./assets/fonts/IBMPlexSans-Italic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
}
@font-face {
    font-family: 'IBM Plex Sans';
    src: url('./assets/fonts/IBMPlexSans-SemiBoldItalic.eot');
    src: local('IBM Plex Sans SemiBold Italic'), local('IBMPlexSans-SemiBoldItalic'),
        url('./assets/fonts/IBMPlexSans-SemiBoldItalic.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/IBMPlexSans-SemiBoldItalic.woff') format('woff'),
        url('./assets/fonts/IBMPlexSans-SemiBoldItalic.ttf') format('truetype');
    font-weight: 600;
    font-style: italic;
}
@font-face {
    font-family: 'IBM Plex Sans';
    src: url('./assets/fonts/IBMPlexSans.eot');
    src: local('IBM Plex Sans'), local('IBMPlexSans'),
        url('./assets/fonts/IBMPlexSans.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/IBMPlexSans.woff') format('woff'),
        url('./assets/fonts/IBMPlexSans.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'IBM Plex Sans';
    src: url('./assets/fonts/IBMPlexSans-SemiBold.eot');
    src: local('IBM Plex Sans SemiBold'), local('IBMPlexSans-SemiBold'),
        url('./assets/fonts/IBMPlexSans-SemiBold.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/IBMPlexSans-SemiBold.woff') format('woff'),
        url('./assets/fonts/IBMPlexSans-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
}

// Common styles of the project
body, html{
  margin: 0;
  padding: 0;
  min-height: 100vh;
}
body{
    background: linear-gradient(180deg, #1B1A1F 0%, #111013 99.09%);
    height: 100%;
    padding-bottom: 50px;
    font-family: 'IBM Plex Sans';
}

.container{
    width: 1160px;
    margin: 0 auto;
    max-width: calc(100% - 60px);
}
.checkbox {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.01em;
    cursor: pointer;
    transition: 0.3s;
    span{
        border: 1px solid #626262;
        color: #626262;
        padding: 4px 12px;
        border-radius: 20px;
        transition: 0.3s;
        display: block;
    }
    &:hover span{
        color: #fff;
        border-color: #fff;
    }
    svg{
        margin-left: 7px;
    }
    input{
        display: none;
        &:checked + span{
            color: #3C59F0;
            border-color: #3C59F0;
        }
    }
}

@media only screen and (max-width: 500px) {
    .container{
        max-width: calc(100% - 30px);
    }
}
</style>
