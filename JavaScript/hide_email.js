hide_email = function (user_email) 
{
    var half, splitted, part1, part2;
    splitted = user_email.split("@");
    part1 = splitted[0];
    half = part1.length / 2;
    part1 = part1.substring(0, (part1.length - half));
    part2 = splitted[1];
    return part1 + "...@" + part2;
};

console.log(hide_email("example111@example.com"));
