<template>
  <v-container>
    <div class="posted-blog custome-container" style="max-width:800px">
      <h1>AMD unveils its 2nd-gen Epyc CPUs, "the world's fastest x86 processors</h1>
      <div class="description mb-3 grey--text darken-1">
          <span>By <b><nuxt-link to="/">Rob Thubron</nuxt-link></b> </span><span> on August 8, 2019, 3:27 AM</span>
      </div>
      <img
        src="https://static.techspot.com/images2/news/bigimage/2019/08/2019-08-08-image-8.jpg"
        alt
      />
      <p>Why it matters: AMD might be worrying Intel in the consumer CPU market following the launch of its Ryzen 3000 line, but Chipzilla still dominates the data center industry, where it holds a 95 percent market share. But that might start to change following the launch of team red’s second-generation, Epyc Rome processors, which it says are the most powerful x86 processors in the world.</p>
      <p>Based on AMD's Zen 2 technology, the Epyc 7xx2 chips have the distinction of being the world’s first 7-nanometer server processors, thereby offering better performance and efficiency than their predecessors.</p>
      <img
        src="https://static.techspot.com/images2/news/bigimage/2019/08/2019-08-08-image-7.jpg"
        alt
      />
      <p>The processors will be built as nine-die packages, as opposed to the four dies found in the first generation. They feature between eight and 64 cores (128 threads), combining up to eight 7nm chiplets connected through the 2nd-gen Infinity Fabric, with a 14-nanometer I/O die in the center. AMD calls this setup hybrid multi-die architecture. Compared to the last generation of Epyc processors, the Rome chips offer twice the performance per socket and about 4X peak theoretical FLOPS.</p>
      <img
        src="https://static.techspot.com/images2/news/bigimage/2019/08/2019-08-08-image-5.jpg"
        alt
      />
      <p>We’ve heard plenty about Ryzen 3000’s support of PCIe 4.0, which brings twice the bandwidth of gen 3.0. Epyc 7xx2 is the first PCIe 4.0-ready x86 server processor, offering 128 lanes and a peak PCIe bandwidth of 512GB/s.</p>
      <img
        src="https://static.techspot.com/images2/news/bigimage/2019/08/2019-08-08-image-3.jpg"
        alt
      />
      <p>The chips also boast several security features, including Secure Memory Encryption, Secure Encrypted Virtualization, and support for up to 509 keys, as well as in-built Spectre V2 mitigations. Additionally, the chips support up to 4TB of DDR4-3200 spread across eight channels, putting it ahead of the Intel Xeon’s six channels of DDR4-2933.</p>
      <img
        src="https://static.techspot.com/images2/news/bigimage/2019/08/2019-08-08-image-4.jpg"
        alt
      />

      <p>
        Speaking of Xeon, Scott Aylor, general manager of AMD's Datacenter Solutions Group, said when it comes to "high volume, high growth-relevant workloads," AMD’s processors have an 80 to 100 percent performance advantage over the competition.
        <br />"So when we take and bend the curve on performance, generation on generation, in terms of doubling performance, and having that level of lead over and above our competitor, you can imagine why customers and partners are super excited," he added.
      </p>
    </div>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      title: "This is Damn title"
    };
  }
};
</script>
<style>
.custome-container {
  max-width: 900px;
  margin: 5px auto;
}
</style>