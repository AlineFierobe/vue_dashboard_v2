<template>
  <div>
    <div class="container-edit">
      <fieldset>
        <legend>texte</legend>
        <!-- TOGGLE BOLD -->
        <form @submit.prevent="boldText" method="post">
          <button type="submit" class="btnBold">B</button>
        </form>
        <!-- TOGGLE ITALIC -->
        <form @submit.prevent="italicText" method="post">
          <button type="submit" class="btnItalic">I</button>
        </form>
        <!-- TOGGLE UNDERLINE -->
        <form @submit.prevent="underlineText" method="post">
          <button type="submit" class="btnUnderline">U</button>
        </form>
        <!-- TOGGLE STRIKE -->
        <form @submit.prevent="strikeText" method="post">
          <button type="submit" class="btnStrike">S</button>
        </form>
      </fieldset>
      <fieldset>
        <legend>alignement</legend>
        <!-- TOGGLE LEFT -->
        <form @submit.prevent="leftText" method="post">
          <button type="submit">
            <i class="fas fa-align-left"></i>
          </button>
        </form>
        <!-- TOGGLE CENTER -->
        <form @submit.prevent="centerText" method="post">
          <button type="submit">
            <i class="fas fa-align-center"></i>
          </button>
        </form>
        <!-- TOGGLE RIGHT -->
        <form @submit.prevent="rightText" method="post">
          <button type="submit">
            <i class="fas fa-align-right"></i>
          </button>
        </form>
        <!-- TOGGLE JUSTIFY -->
        <form @submit.prevent="justifyText" method="post">
          <button type="submit">
            <i class="fas fa-align-justify"></i>
          </button>
        </form>
      </fieldset>
      <fieldset>
        <legend>liste</legend>
        <!-- TOGGLE LIST -->
        <form @submit.prevent="addList" method="post">
          <button type="submit">
            <i class="fas fa-list-ul"></i>
          </button>
        </form>
        <!-- TOGGLE LIST ELEMENT -->
        <form @submit.prevent="addListElement" method="post">
          <button type="submit">
            <i class="fas fa-genderless"></i>
          </button>
        </form>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextEditButtons",
  props: ["textBox"],
  data() {
    return {
      modified: "",
    };
  },

  beforeUpdate() {
    this.$nextTick(function() {
      this.modified = this.textBox;
    });
  },

  methods: {
    // GET THE SELECTED TEXT
    getSelectedText() {
      let text = window.getSelection().toString();
      return text;
    },

    // METHODS TO CHANGE TEXT STYLE
    // TO BOLD
    boldText() {
      let selectedText = this.getSelectedText();
      if (selectedText) {
        let selectedBold = "<b>" + selectedText + "</b>";
        this.modified = this.textBox;
        if (this.textBox.includes(selectedBold)) {
          this.modified = this.modified.replace(selectedBold, selectedText);
          this.$emit("changed", this.modified);
        } else {
          this.modified = this.modified.replace(selectedText, selectedBold);
          this.$emit("changed", this.modified);
        }
      }
    },

    // TO ITALIC
    italicText() {
      let selectedText = this.getSelectedText();
      if (selectedText) {
        let selectedItalic = "<i>" + selectedText + "</i>";
        this.modified = this.textBox;
        if (this.textBox.includes(selectedItalic)) {
          this.modified = this.modified.replace(selectedItalic, selectedText);
          this.$emit("changed", this.modified);
        } else {
          this.modified = this.modified.replace(selectedText, selectedItalic);
          this.$emit("changed", this.modified);
        }
      }
    },

    // TO UNDERLINE
    underlineText() {
      let selectedText = this.getSelectedText();
      if (selectedText) {
        let selectedUnderline = "<u>" + selectedText + "</u>";
        this.modified = this.textBox;

        if (this.textBox.includes(selectedUnderline)) {
          this.modified = this.modified.replace(
            selectedUnderline,
            selectedText
          );
          this.$emit("changed", this.modified);
        } else {
          this.modified = this.modified.replace(
            selectedText,
            selectedUnderline
          );
          this.$emit("changed", this.modified);
        }
      }
    },

    // TO STRIKE
    strikeText() {
      let selectedText = this.getSelectedText();
      if (selectedText) {
        let selectedStrike = "<s>" + selectedText + "</s>";
        this.modified = this.textBox;

        if (this.textBox.includes(selectedStrike)) {
          this.modified = this.modified.replace(selectedStrike, selectedText);
          this.$emit("changed", this.modified);
        } else {
          this.modified = this.modified.replace(selectedText, selectedStrike);
          this.$emit("changed", this.modified);
        }
      }
    },

    // METHODS TO CHANGE TEXT-ALIGN VALUE
    // ALIGN LEFT
    leftText() {
      let selectedText = this.getSelectedText();
      if (selectedText) {
        // variable for all align possible
        let selectedRight =
          '<div style="text-align:right;">' + selectedText + "</div>";
        let selectedLeft =
          '<div style="text-align:left;">' + selectedText + "</div>";
        let selectedCenter =
          '<div style="text-align:center;">' + selectedText + "</div>";
        let selectedJustify =
          '<div style="text-align:justify;">' + selectedText + "</div>";

        // assign textBox to modified value
        this.modified = this.textBox;

        // check if the selectedText is already align and change the align if necessary
        if (this.textBox.includes(selectedJustify)) {
          this.modified = this.modified.replace(selectedJustify, selectedLeft);
          this.$emit("changed", this.modified);
        } else if (this.textBox.includes(selectedCenter)) {
          this.modified = this.modified.replace(selectedCenter, selectedLeft);
          this.$emit("changed", this.modified);
        } else if (this.textBox.includes(selectedRight)) {
          this.modified = this.modified.replace(selectedRight, selectedLeft);
          this.$emit("changed", this.modified);
        } else if (this.textBox.includes(selectedLeft)) {
          this.modified = this.modified.replace(selectedLeft, selectedText);
          this.$emit("changed", this.modified);
        } else {
          this.modified = this.modified.replace(selectedText, selectedLeft);
          this.$emit("changed", this.modified);
        }
      }
    },

    // ALIGN CENTER
    centerText() {
      let selectedText = this.getSelectedText();
      if (selectedText) {
        // variable for all align possible
        let selectedRight =
          '<div style="text-align:right;">' + selectedText + "</div>";
        let selectedLeft =
          '<div style="text-align:left;">' + selectedText + "</div>";
        let selectedCenter =
          '<div style="text-align:center;">' + selectedText + "</div>";
        let selectedJustify =
          '<div style="text-align:justify;">' + selectedText + "</div>";

        // assign textBox to modified value
        this.modified = this.textBox;

        // check if the selectedText is already align and change the align if necessary
        if (this.textBox.includes(selectedJustify)) {
          this.modified = this.modified.replace(
            selectedJustify,
            selectedCenter
          );
          this.$emit("changed", this.modified);
        } else if (this.textBox.includes(selectedLeft)) {
          this.modified = this.modified.replace(selectedLeft, selectedCenter);
          this.$emit("changed", this.modified);
        } else if (this.textBox.includes(selectedRight)) {
          this.modified = this.modified.replace(selectedRight, selectedCenter);
          this.$emit("changed", this.modified);
        } else if (this.textBox.includes(selectedCenter)) {
          this.modified = this.modified.replace(selectedCenter, selectedText);
          this.$emit("changed", this.modified);
        } else {
          this.modified = this.modified.replace(selectedText, selectedCenter);
          this.$emit("changed", this.modified);
        }
      }
    },

    // ALIGN RIGHT
    rightText() {
      let selectedText = this.getSelectedText();
      if (selectedText) {
        // variable for all align possible
        let selectedRight =
          '<div style="text-align:right;">' + selectedText + "</div>";
        let selectedLeft =
          '<div style="text-align:left;">' + selectedText + "</div>";
        let selectedCenter =
          '<div style="text-align:center;">' + selectedText + "</div>";
        let selectedJustify =
          '<div style="text-align:justify;">' + selectedText + "</div>";

        // assign textBox to modified value
        this.modified = this.textBox;

        // check if the selectedText is already align and change the align if necessary
        if (this.textBox.includes(selectedJustify)) {
          this.modified = this.modified.replace(selectedJustify, selectedRight);
          this.$emit("changed", this.modified);
        } else if (this.textBox.includes(selectedLeft)) {
          this.modified = this.modified.replace(selectedLeft, selectedRight);
          this.$emit("changed", this.modified);
        } else if (this.textBox.includes(selectedCenter)) {
          this.modified = this.modified.replace(selectedCenter, selectedRight);
          this.$emit("changed", this.modified);
        } else if (this.textBox.includes(selectedRight)) {
          this.modified = this.modified.replace(selectedRight, selectedText);
          this.$emit("changed", this.modified);
        } else {
          this.modified = this.modified.replace(selectedText, selectedRight);
          this.$emit("changed", this.modified);
        }
      }
    },

    // ALIGN JUSTIFY
    justifyText() {
      let selectedText = this.getSelectedText();
      if (selectedText) {
        // variable for all align possible
        let selectedRight =
          '<div style="text-align:right;">' + selectedText + "</div>";
        let selectedLeft =
          '<div style="text-align:left;">' + selectedText + "</div>";
        let selectedCenter =
          '<div style="text-align:center;">' + selectedText + "</div>";
        let selectedJustify =
          '<div style="text-align:justify;">' + selectedText + "</div>";

        // assign textBox to modified value
        this.modified = this.textBox;

        // check if the selectedText is already align and change the align if necessary
        if (this.textBox.includes(selectedRight)) {
          this.modified = this.modified.replace(selectedRight, selectedJustify);
          this.$emit("changed", this.modified);
        } else if (this.textBox.includes(selectedLeft)) {
          this.modified = this.modified.replace(selectedLeft, selectedJustify);
          this.$emit("changed", this.modified);
        } else if (this.textBox.includes(selectedCenter)) {
          this.modified = this.modified.replace(
            selectedCenter,
            selectedJustify
          );
          this.$emit("changed", this.modified);
        } else if (this.textBox.includes(selectedJustify)) {
          this.modified = this.modified.replace(selectedJustify, selectedText);
          this.$emit("changed", this.modified);
        } else {
          this.modified = this.modified.replace(selectedText, selectedJustify);
          this.$emit("changed", this.modified);
        }
      }
    },

    // ADD LIST UL
    // MAIN UL
    addList() {
      let selectedText = this.getSelectedText();
      if (selectedText) {
        let selectedUl = "<ul>" + selectedText + "</ul>";
        this.modified = this.textBox;
        if (this.textBox.includes(selectedUl)) {
          this.modified = this.modified.replace(selectedUl, selectedText);
          this.$emit("changed", this.modified);
        } else {
          this.modified = this.modified.replace(selectedText, selectedUl);
          this.$emit("changed", this.modified);
        }
      }
    },

    // ADD LI
    addListElement() {
      let selectedText = this.getSelectedText();
      if (selectedText) {
        let selectedLi = "<li>" + selectedText + "</li>";
        this.modified = this.textBox;
        if (this.textBox.includes(selectedLi)) {
          this.modified = this.modified.replace(selectedLi, selectedText);
          this.$emit("changed", this.modified);
        } else {
          this.modified = this.modified.replace(selectedText, selectedLi);
          this.$emit("changed", this.modified);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/style.scss";

.container-edit {
  display: grid !important;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin: 1rem 0;
  fieldset {
    legend {
      text-align: center;
      padding: 0 1rem;
      text-transform: uppercase;
      font-size: 1.3rem;
      font-weight: 700;
    }
    border: 1px solid $dark;
    justify-content: center;
    width: 100%;
    display: flex;
    flex-direction: row;
    &:first-child {
      legend {
        text-align: left;
      }
    }
    &:last-child {
      legend {
        text-align: right;
      }
    }
  }
}

button {
  width: 3.5rem;
  height: 3.5rem;
  font-size: 1.5rem;
  margin: 0.3rem;
  background: $dark;
  color: $light;
  border: 0;
  border-radius: $br;
  i {
    font-size: 1.5rem;
  }
}

.btnBold {
  font-weight: 700;
}

.btnItalic {
  font-style: italic;
}

.btnUnderline {
  text-decoration: underline;
}

.btnStrike {
  text-decoration: line-through;
}
</style>
