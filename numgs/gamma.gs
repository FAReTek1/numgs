# Stuff to do with the gamma function

################################################################

# ChatGPT-adapted lanczos approximation of the gamma function
func gamma(x) {
    # Get gamma (factorial extension with shift) of a number (non complex)
    # https://literateprograms.org/gamma_function_with_the_lanczos_approximation__python_.html
    if $x < 0.5 {
        return PI / (sin(180 * $x) * gamma(1 - $x));
    } else {
        local v = lanczos_coefs[1];
        local i = 2;
        repeat 8 {
            v += lanczos_coefs[i] / (($x - 2) + i);
            i++;
        }
        return 2.506628267370251 * safepow($x + 6.5, $x - 0.5) * v * antiln(-1 * ($x + 6.5));
    }
}

func stirlings_approx(n) {
    return sqrt(6.283185307179586 * $n) * POW($n / 2.718281828459045, $n);
}

# Burnside's asymptotic formula for the gamma/extented factorial function
func burnsides_approx(n) {
    # https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=10fb33b0e1216656f24acbccbf4bdca027ff39d3
    # 2.5066282746310002 = sqrt(tau)
    return 2.5066282746310002 * POW(($n + 0.5) / 2.718281828459045, $n + 0.5);
}
