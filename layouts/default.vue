<template>
  <div>
    <header class="mw-header header">
      <div class="header-logo">
        <a href="/" class="mw-logo citizen-header__button" title="Visit the main page"> </a>
      </div>
    </header>
    <div class="body">
      <div class="page-container">
        <main>
          <div class="body-container">
            <div class="body-content">
              <slot />
            </div>
          </div>
        </main>
      </div>
    </div>
    <footer>
      <p>© 2024 Kristian Bicanovsky</p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: auto;
  z-index: $z-index-dropdown; // Using z-index from variables
  display: flex;
  flex-direction: $header-direction;
  gap: $space-xxs;
  padding: calc(0.5 * $space-unit);
  background-color: $background-color-dark;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.header-logo {
  padding: 0 $space-xs 0 0;
  margin: 0 $space-xxs;
  border-right: $border-width-base solid $border-color-base;
}

@media screen and (min-width: 1120px) {
  .header {
    flex-direction: column;
    border-right: $border-width-base solid $border-color-base;
  }

  .page-container {
    margin-left: $space-xxl;
  }

  .header-logo {
    padding: 0 0 $space-xs 0;
    margin: $space-xxs 0;
    border-right: 0;
    border-bottom: $border-width-base solid $border-color-base;
  }
}

.header-inner {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: $space-xxs;
  justify-content: space-between;
  min-width: 0;
  overflow-x: auto;
}

.header-start,
.header-end {
  display: flex;
  gap: $space-xxs;
}

.header-end {
  display: flex;
  flex-direction: column;
  gap: $space-xxs;
  align-items: center;
}

.header-start {
  align-items: center;
}

.mw-logo-icon {
  width: $font-size-xlarge;
  height: $font-size-xlarge;
}

.mw-side-icon {
  width: $font-size-medium;
  height: $font-size-medium;
}

.dropdown {
  display: flex;
  justify-content: center;
}

.citizen-header__button {
  display: grid;
  place-items: center;
  width: $header-button-size;
  height: $header-button-size;
}

footer {
  text-align: center;
  margin-top: $space-lg;
  color: $text-color-muted;
}

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.body-container {
  display: grid;
  grid-template-areas:
    "header"
    "afterHeader"
    "content"
    "footer";
  grid-template-columns: minmax(0, $width-layout);
  gap: 0 $space-xl;
  justify-content: center;
  padding: 0 $padding-page;
  margin: $space-xl 0;
}

main {
  display: block;
}

.body-content {
  z-index: 0;
  grid-area: content;
  font-size: $font-size-medium;
  line-height: $line-height-base;
}
</style>
