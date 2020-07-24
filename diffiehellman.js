/*
    This code explains Diffie-Hellman key exchange.

    Diffie-Hellman works because there is a function 'magic(g,a)'
    that has three properties. These are:

    Property#1: It's relatively cheap to calculate. This seems obvious,
    because every function we use has has this properity. We wouldn't
    use it if we couldn't caculate it. However, as we'll see, this
    function is very similar to one we can't calculate, which is why
    we mention this.
    
    Property#2: It's too expensive/infeasable to calculate the reverse.
    In other words, we can't take the result and 'g' and discover the
    original value of 'a'. It's a one-way function.

    Property#3: It satisfies the equation:
        magic(magic(g,a), b) == magic(magic(g,b), a)
    In other words, we can calculate the result in either order,
    doing 'a' then 'b', or doing 'b' then 'a'.

    How Diffie-Hellman works.

    Alice chooses a random number 'a', calculates magic(g,a), and
    makes this number public. The number 'a' is private, known
    only to Alice, but the result of this calculation is public,
    because nobody can calculate the reverse.

    Bob does the same with a random number 'b'.

    Alice takes Bob's public result and calculates magic(bobs_result,a).
    Bob takes Alice's public result and calculates magic(alice_result,b).
    
    Both Alice and Bob now have a shared secret only they know,
    that nobody else knows, even though everyone say the numbers they
    published. Bob doesn't know Alice's private number 'a', nor does Alice
    know Bob's private number 'b', but both know this combination.

    This is shown in the code below where Alice chose 777 and Bob chose 555.

    Now let's explain the math. Exponentiation with large numbers is
    computationally infeasable, but modular exponentiation is cheap,
    as the algorithm below shows. It loops through all the bits in
    the 'exponent' one at a time to create the result. This satisfies
    the first property.

    Now let's talk about going the verse direction. This is called
    the "discrete logarithm" problem, which is the opposite of 
    "modular exponentiation". There's no known easy solution to this
    problem.

    Now let's let's talk exponential arithmetic. We already know from
    high-school that a^b^c (a to the power of b to the power of c)
    is the same as a^bc, which is the same as a^cb, which is the same
    as a^c^b
*/
    


/* Whereas exponentiation is too expesnvie to calculate for big numbers,
 * modular exponentiation is cheap to calculate. However, the reverse
 * still can't be calculated */
const modular_exponentiation = function (base, exponent, prime) {
    base = base % prime;
    var result = 1;
    var x = base;
  
    while(exponent > 0){
      var least_significant_bit = exponent % 2;
      exponent = Math.floor(exponent / 2);
  
      if (least_significant_bit == 1) {
        result = result * x;
        result = result % prime;
      }
  
      x = x * x;
      x = x % prime;
    }
    return result;
};

const magic = function(base, x) {
    return modular_exponentiation(base, x, 65537);
}

/* In this example, Alice's private nubmer is 777 and Bob's
    private number is 555. */
console.log("Alice = " + magic(magic(1234, 555), 777));
console.log("Bob = " + magic(magic(1234, 777), 555));

