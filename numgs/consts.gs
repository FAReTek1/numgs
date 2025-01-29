# Collection of constants, defined as macros. Will add more.

%define TAU 6.283185307179586 # PI * 2
%define GOLDEN_RATIO 1.618033988749895 # (1 + sqrt 5) / 2
%define INF "Infinity"

%define B10_DIGITS "0123456789"
%define B2_DIGITS "01"
%define B8_DIGITS "01234567"
%define B16_DIGITS "0123456789ABCDEF"

################################################################
 # For some reason gs doesn't seem to work with negative numbers here, so I made them into strings
list lanczos_coefs = [    
    "0.99999999999980993",
    "676.5203681218851",
    "-1259.1392167224028",
    "771.32342877765313",
    "-176.61502916214059",
    "12.507343278686905",
    "-0.13857109526572012",
    "9.9843695780195716e-6",
    "1.5056327351493116e-7"
];

