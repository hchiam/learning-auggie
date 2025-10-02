## Chrome built-in AI APIs

<https://developer.mozilla.org/en-US/docs/Web/API/Summarizer#examples>

To summarize (doesn't seem to be working even in Chrome as of the time of writing this).

```js
Summarizer;
```

<https://developer.mozilla.org/en-US/docs/Web/API/Translator_and_Language_Detector_APIs/Using>

To detect language and translate (both seem to already be working, just in Chrome for now).

```js
LanguageDetector;
```

```js
Translator;
```

also has more complete example at the end of the MDN page (notably missing quota stuff as of the time of writing this)

```js
var detector = await LanguageDetector.create({
  expectedInputLanguages: ["en-US", "zh"],
});
console.log(1, "detected language", (await detector.detect("Hi there!"))[0]);

var translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});
console.log(2, "translation", await translator.translate("What time is it?"));

var translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});
var stream = translator.translateStreaming(
  "What time is it? What time is it? What time is it? What time is it? What time is it?"
);
translation = "";
for await (var chunk of stream) {
  console.log("chunk", chunk);
  translation += chunk;
}
console.log(3, "translation stream complete", translation);

var detectorAvailability = await LanguageDetector.availability({
  expectedInputLanguages: ["en-US", "ja"],
});
console.log(4, "detectorAvailability", detectorAvailability);
var translatorAvailability = await Translator.availability({
  sourceLanguage: "en",
  targetLanguage: "ja",
});
console.log(5, "translatorAvailability", translatorAvailability);

// there's also AbortController to translator.destroy(); detector.destroy();

// there's also monitor for monitoring download progress and usage quota
```
