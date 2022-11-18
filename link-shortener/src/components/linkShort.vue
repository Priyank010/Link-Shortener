<template>
    <div align="center" class="main">
        <h1>Link Shortner</h1>
        <input v-model="url" class="input-bar" type="text">
        <button class="submit-button" @click="submit">Submit</button>
        <div v-if="link">
            <span id="shortened-link" class="animate-charcter">{{link}}</span>
        </div>
        <button v-if="link" class="btn" data-clipboard-target="#shortened-link">
            Copy to clipboard
        </button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            url:null,
            api_key:'8a5e42cf9d92672e35f8729c105cf8ce5f30a3a4',
            link:null
        }
    },
    methods:{
        async submit(){
            const requestOptions = {
                method: "POST",
                headers: { Authorization: `Bearer ${this.api_key}`,"Content-Type": "application/json" },
                body: JSON.stringify({ long_url: this.url, domain: 'bit.ly' })
            };
            const response = await fetch("https://api-ssl.bitly.com/v4/shorten", requestOptions);
            const data = await response.json();
            this.link = data.link
        }
    }
}
</script>

<style scoped>
.main{
    margin-top: 50px;
}
h1{
    font-family:monospace
}
.submit-button{
    padding: 15px 40px;
    font-family:monospace;
    background-color: #ba0000;
    color: white;
    margin-left: 10px;
}
.input-bar {
  width: 40%;
  height: 10%;
  border-radius: 5px;
  padding: 10px;
  font-size: 1.2rem;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 3px solid rgba(0, 0, 0, 0.5);
}
.animate-charcter
{
    background-image: linear-gradient(
        -225deg,
        #231557 0%,
        #44107a 29%,
        #ff1361 67%,
        #fff800 100%
    );
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    display: inline-block;
    font-size: 30px;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
</style>