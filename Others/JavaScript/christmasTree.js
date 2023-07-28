function christmasTree(height) 
{
  let str = [];
  for (let i = 1; i <= height; i++) 
  {
    str.push(" ".repeat(height - i) + 
      "*".repeat((i - 1) * 2 + 1) + " ".repeat(height - i));
  }
  return str.join("\n");
}
