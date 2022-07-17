# AL-9000

```
php -S localhost:9999
```

## bugs

### Chrome 

Outils development / Issues :

`speechSynthesis.speak() without user activation is deprecated and will be removed`

Impossible d'utiliser `speak` s'il n'y a pas eu d'interaction utilisateur.

### Chrome / Safari / Firefox

* `synth.getVoices()` ne se charge pas de la même manière : synchrone/asynchrone.

* `synth.getVoices().forEach(elt => { console.log(elt); });` retourne la liste des langues supportées. Une propriété `default` à `true` sur Chrome sélectionne la langue française mais est renseignée à `false` sur Firefox alors que sur Safari, elles sont toutes renseignée à `true`.