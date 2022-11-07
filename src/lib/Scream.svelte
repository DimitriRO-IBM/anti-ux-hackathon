<script>
  import { onMount } from 'svelte';

  const src = '/audio/surprise.wav';
  const id = 'spookySound';
  const audioCtx = new window.AudioContext();

  function handleAutoPlay () {
    fetch(src).then((response) => {
      console.info('Transforming the audio file onto a buffer...');
      return response.arrayBuffer();
    }).then((buffer) => {
      console.info('Decoding audio data...');
      return audioCtx.decodeAudioData(buffer);
    }).then((decodedData) => {
      console.info('Creating AudioContext from buffer...');
      // Create bufferSource
      const bufferSource = audioCtx.createBufferSource();
      bufferSource.connect(audioCtx.destination);
      bufferSource.buffer = decodedData;

      // Resume audioContext in case it's not running for any reason
      audioCtx.resume().then(() => {
        // Play audio file
        bufferSource.start(0);
      });
    });
  }

  onMount(async () => {
    handleAutoPlay();
  });
</script>

<audio {id} autoplay>
    <source {src} type="audio/wav">
</audio>

<style></style>
