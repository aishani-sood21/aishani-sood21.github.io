function analyzeText() {
    const text = document.getElementById("textInput").value;
    const resultsDiv = document.getElementById("results");
  
    // Count letters
    const letters = text.match(/[a-zA-Z]/g)?.length || 0;
  
    // Word count with cleaned punctuation and real whitespace splitting
    const cleanedText = text.replace(/[’‘“”'"`.,;:!?()\[\]{}<>\/\\|*_+=~^%$#@&-]/g, '');
    const wordCount = cleanedText
      .split(/\s+/)
      .filter(word => word.trim().length > 0).length;
  
    // Other counts
    const spaces = text.match(/ /g)?.length || 0;
    const newlines = text.match(/\n/g)?.length || 0;
    const specialSymbols = text.match(/[^\w\s]/g)?.length || 0;
  
    // Tokenize for analysis
    const tokens = text.toLowerCase().match(/\b\w+\b/g) || [];
  
    // Target word lists
    const pronouns = ["i", "me", "you", "he", "him", "she", "her", "it", "we", "us", "they", "them"];
    const prepositions = [
      "in", "on", "at", "by", "with", "about", "against", "between", "into",
      "through", "during", "before", "after", "above", "below", "to", "from",
      "up", "down", "over", "under"
    ];
    const articles = ["a", "an"];
  
    // Count helper
    const countOccurrences = (list) =>
      list.reduce((acc, word) => {
        if (!acc[word]) acc[word] = 0;
        acc[word]++;
        return acc;
      }, {});
  
    // Grouped counts
    const pronounCounts = countOccurrences(tokens.filter(t => pronouns.includes(t)));
    const prepositionCounts = countOccurrences(tokens.filter(t => prepositions.includes(t)));
    const articleCounts = countOccurrences(tokens.filter(t => articles.includes(t)));
  
    // Output
    let output = `Text Statistics
  ------------------------
  Letters: ${letters}
  Words: ${wordCount}
  Spaces: ${spaces}
  Newlines: ${newlines}
  Special Symbols: ${specialSymbols}
  
  Pronouns Count:
  ------------------------
  `;
  
    for (let p in pronounCounts) {
      output += `${p}: ${pronounCounts[p]}\n`;
    }
  
    output += `
  Prepositions Count:
  ------------------------
  `;
    for (let p in prepositionCounts) {
      output += `${p}: ${prepositionCounts[p]}\n`;
    }
  
    output += `
  Articles Count:
  ------------------------
  `;
    for (let a in articleCounts) {
      output += `${a}: ${articleCounts[a]}\n`;
    }
  
    resultsDiv.textContent = output;
  }
  