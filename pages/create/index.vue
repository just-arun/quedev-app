<template>
  <v-layout row wrap class="custome-container">
    <h1 class="ml-3 my-3">Create your Post</h1>
    <v-flex xs12>
      <v-text-field class="mx-2" v-model="title" label="title" filled></v-text-field>
    </v-flex>
    <v-flex xs12 background-color="#ebebeb">
      <v-layout class="mx-2" background-color="#ebebeb" row wrap justify-center>
        <!-- <span> -->
        <v-btn
          v-for="(item, i) in EditorUtil"
          :key="i"
          @click="performAction(item.func)"
          small
          text
        >
          <v-icon>{{item.icon}}</v-icon>
        </v-btn>
        <v-btn text small @click="preview = !preview">
          <v-icon>{{ preview ? 'mdi-eye-off' : 'mdi-eye' }}</v-icon>
        </v-btn>
        <!-- </span> -->
      </v-layout>
    </v-flex>
    <v-flex xs12 v-if="!preview">
      <v-textarea
        id="postBody"
        v-model="postBody"
        class="mx-2 my-4"
        height="500"
        filled
        name="input-7-4"
        label="Body"
        ref="postBody"
      ></v-textarea>
    </v-flex>
    <v-flex xs12 v-if="preview">
      <div class="preview-body posted-blog">
        <h1>{{title}}</h1>
        {{ dateNow.toUTCString() }}
        <div style="min-height:500px" v-html="$md.render(postBody)"></div>
      </div>
    </v-flex>
    <v-flex xs12>
      <v-layout row wrap class="mx-2">
        <v-spacer></v-spacer>
        <v-btn color="info">
          <span>save</span>
          <v-icon right>mdi-content-save</v-icon>
        </v-btn>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      keyWords: [],
      preview: false,
      items: [],
      title: "",
      postBody: "",
      EditorUtil: [
        {
          icon: "mdi-format-bold",
          func: "B"
        },
        {
          icon: "mdi-format-italic",
          func: "I"
        },
        {
          icon: "mdi-format-strikethrough",
          func: "ST"
        },
        {
          icon: "mdi-format-list-bulleted",
          func: "UL"
        },
        {
          icon: "mdi-format-quote-close",
          func: "Q"
        },
        {
          icon: "mdi-table",
          func: "T"
        },
        {
          icon: "mdi-format-header-1",
          func: "H"
        },
        {
          icon: "mdi-image",
          func: "IMG"
        },
        {
          icon: "mdi-link-variant",
          func: "L"
        }
      ]
    };
  },
  computed: {
    dateNow() {
      return new Date();
    }
  },
  methods: {
    remove(item) {
      this.keyWords.splice(this.keyWords.indexOf(item), 1);
      this.keyWords = [...this.keyWords];
    },
    performAction(fWhich) {
      const body = document.getElementById("postBody");
      var start = body.selectionStart;
      var end = body.selectionEnd;
      const initBody = this.postBody;
      let utilFunc = para => {
        if (start == this.postBody.length) {
          this.postBody = `${initBody}${para}${para}`;
        } else {
          this.postBody = `${initBody.substring(
            0,
            start
          )}${para}${initBody.substring(start, end)}${para}${initBody.substring(
            end,
            initBody.length
          )}`;
        }
      };
      const utilBlockFunc = para => {
        const check = initBody
          .substring(initBody.length - 1, initBody.length + 1)
          .match(/\n/g || []);
          if (start !== initBody.length) {
            this.postBody = `${initBody.substring(start,end)}${para}${initBody.substring(end,initBody.length)}`;
          } else {
            if (check == null) {
              this.postBody = `${initBody}\n${para}`;
            } else {
              this.postBody = `${initBody}${para}`;
            }
          }
      };
      const textInside = para => {
        this.postBody = `${initBody}${para}`;
      };
      if (fWhich == "B") {
        utilFunc("**");
      }
      if (fWhich == "I") {
        utilFunc("*");
      }
      if (fWhich == "ST") {
        utilFunc("~~");
      }
      if (fWhich == "T") {
        utilBlockFunc(
          "|\ttitle-1\t|     title-2    | \n| --------------- | ---------------- |\n| content-1 | content-2 |"
        );
      }
      if (fWhich == "UL") {
        utilBlockFunc("- ");
      }
      if (fWhich == "Q") {
        utilBlockFunc("> ");
      }
      if (fWhich == "H") {
        utilBlockFunc("# ");
      }
      if (fWhich == "IMG") {
        textInside("![image description](image url)");
      }
      if (fWhich == "L") {
        textInside("[link text](link url)");
      }
      start = this.postBody.length;
    }
  }
};
</script>
<style>
.custome-container {
  margin: 5px auto;
  max-width: 800px;
}
@media screen and (max-width: 900px) {
  .custome-container {
    max-width: 512px;
  }
}
</style>