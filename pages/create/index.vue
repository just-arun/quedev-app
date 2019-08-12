<template>
  <v-container>
    <v-layout row wrap class="custome-container">
      <v-flex xs12>
        <v-text-field
           class="mx-2" v-model="title" label="title" filled></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-textarea
           class="mx-2" filled name="input-7-4" label="Description For Your Post"></v-textarea>
      </v-flex>
      <v-flex xs12>
        <v-combobox
          class="mx-2"
          v-model="keyWords"
          :items="items"
          chips
          clearable
          label="Key Words for Your Post"
          multiple
          filled
          
        >
          <template v-slot:selection="{ attrs, item, select, selected }">
            <v-chip
              v-bind="attrs"
              :input-value="selected"
              close
              @click="select"
              @click:close="remove(item)"
            >
              <strong>{{ item }}</strong>
            </v-chip>
          </template>
        </v-combobox>
      </v-flex>
      <v-flex xs12 background-color="#ebebeb">
        <v-layout class="mx-2" background-color="#ebebeb" row wrap justify-center>
          <!-- <span> -->
            <v-btn v-for="(item, i) in EditorUtil" :key="i" @click="performAction(item.func)" small text>
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
          <div class="preview-body">
              <h1>{{title}}</h1>
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
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      keyWords: [],
      preview: false,
      items: [
        "c",
        "c++",
        "JacaScript",
        "NodeJS",
        "python",
        "Dart",
        "go",
        "golang",
        "django",
        "php",
        "flask",
        "docker"
      ],
      title: '',
      postBody: "",
      EditorUtil: [
          {
              icon: 'mdi-format-bold',
              func: 'B'
          },
          {
              icon: 'mdi-format-italic',
              func: 'I'
          },
          {
              icon: 'mdi-format-strikethrough',
              func: 'ST'
          },
          {
              icon: 'mdi-format-list-bulleted',
              func: 'UL'
          },
          {
              icon: 'mdi-format-quote-close',
              func: 'Q'
          },
          {
              icon: 'mdi-table',
              func: 'T'
          },
          {
              icon: 'mdi-format-header-1',
              func: 'H'
          },
          {
              icon: 'mdi-image',
              func: 'IMG'
          },
          {
              icon: 'mdi-link-variant',
              func: 'L'
          },
      ]
    };
  },

  methods: {
    remove(item) {
      this.keyWords.splice(this.keyWords.indexOf(item), 1);
      this.keyWords = [...this.keyWords];
    },
    performAction(fWhich) {
      const body = document.getElementById("postBody");
      const start = body.selectionStart;
      const end = body.selectionEnd;
      const initBody = this.postBody;
      const utilFunc = (para) => {
        this.postBody = `${initBody.substring(0, start)}${para}${initBody.substring(
          start,
          end
        )}${para}${initBody.substring(end, initBody.length)}`;
      }
      const utilBlockFunc = (para) => {
        const check = (initBody.substring((initBody.length - 1),(initBody.length + 1))).match(/\n/g || []);
        if (check == null) {
            this.postBody = `${initBody}\n${para}`;
        } else {
            this.postBody = `${initBody}${para}`;
        }
      }
      const textInside = (para) => {
            this.postBody = `${initBody}${para}`;
      }
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
          utilBlockFunc("|     title-1    |     title-2    | \n| --------------- | ---------------- |\n| content-1 | content-2 |");
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
          textInside("![link text](link url)");
      }
    },
  }
};
</script>
<style>
.custome-container {
  margin: 5px auto;
  max-width: 900px;
}
</style>