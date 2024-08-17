// Template Literals

function sides(literals, ...expressions) {
    const [A,P] = [...expressions]
    let s1 = (P+Math.sqrt(P**2 - 16 *A))/4
    let s2 = (P-Math.sqrt(P**2 - 16 *A))/4
  
    return [s1,s2].sort()
}