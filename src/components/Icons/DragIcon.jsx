import React from 'react';

export default function DragIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="52"
            height="52"
            fill="none"
            viewBox="0 0 52 52"
        >
            <mask
                id="mask0_1_155"
                style={{ maskType: 'alpha' }}
                width="52"
                height="52"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
            >
                <path fill="url(#dragIcon)" d="M0 0H52V52H0z"></path>
            </mask>
            <g mask="url(#mask0_1_155)">
                <path fill="currentColor" d="M0 0H52V52H0z"></path>
            </g>
            <defs>
                <pattern id="dragIcon" width="1" height="1" patternContentUnits="objectBoundingBox">
                    <use transform="matrix(.0023 0 0 .0023 -.09 -.09)" xlinkHref="#image0_1_155"></use>
                </pattern>
                <image
                    id="image0_1_155"
                    width="512"
                    height="512"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAEoBJREFUeJzt3X/M7mdB3/H3kQNCwFYqQ7eVBRBwW+e2aJ0tGmVGZ3Rlw8UzZrKZ/VC3dIROGwlotlnGEkAww9BsmYZM9gfJIErWf0iWzEWY7aYprqbZMszQlKSJrgp2dRShZ3/cPONXS+/nnO99X/f3e71eyf1vzydP+/R6n+9zX/dTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACclgujB5zD9dXNo0fs6e7qI6NH7OnS6AF7eqC6Z/SIPd1UPW/0iD29e/SAPfn+h4ldqi6v5LWWQ7XGf632fa3loKrd1tFfr31fa+H7Hxb2JaMHAADHJwAAYEICAAAmJAAAYEICAAAmJAAAYEICAAAmJAAAYEICAAAmJAAAYEICAAAmJAAAYEICAAAmJAAAYEICAAAmJAAAYEICAAAmJAAAYEICAAAmJAAAYEICAAAmJAAAYEICAAAmJAAAYEICAAAmJAAAYEICAAAmJAAAYEICAAAmJAAAYEICAAAmJAAAYEICAAAmJAAAYEICAAAmJAAAYEICAAAmJAAAYEICAAAmJAAAYEICAAAmdGH0gHO4vrp59Ig93V19ZPSIPV0aPWBPD1T3jB6xp5uq540esad3jx6wJ9//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ+NSdXklr0sH+hrArHz/w8K+ZPQAAOD4BAAATEgAAMCEBAAATEgAAMCEBAAATEgAAMCEBAAATEgAAMCEBAAATEgAAMCEBAAATEgAAMCEBAAATEgAAMCEBAAATEgAAMCEBAAATEgAAMCEBAAATEgAAMCEBAAATEgAAMCEBAAATEgAAMCEBAAATEgAAMCEBAAATEgAAMCEBAAATEgAAMCEBAAATEgAAMCEBAAATEgAAMCEBAAATEgAAMCEBAAATEgAAMCEBAAATEgAAMCELo4ecA4PVO8ZPWJPD4wewBN6bvWC6ss+/VrT98DMbho94BzWtHV2n6we/vTrf1W/M3bOcV0YPQAO6EL1DdUt1TdVN1bXDF0EnLLfr36l+s/VXdWvjp1zWAKALXp29UPVP6ieP3gLsF4frv5l9TPVRwdvWZwAYEueWt1avT5/0weW80j1luqN1ccHb1mMAGAr/lz1rupPjR4CbNb91fdVvz56yBLcAmALvq+6J4c/cFg3VP+1euXoIUt4yugBcJVurX623eN/gEO7WP21djcGVv0mQQHAmv2Ndoe/J1nAMV2ovrvd1cH7Bm+5Yt4DwFr9mXaP4p4xeggwrUerb6z+2+ghV0IAsEZfWn0wP/MHxru/+rrqE6OHnJcfAbBGr2n3+B9gtOe2+yTBXx495Lw8AWBtrqt+s93H+AKcgo+1+9CxVX1YkDdPsTY/lMMfOC3XVj84esR5eQLAmlxo965bH+8LnJoPV19dXR49ZF+eALAmfyGHP3CaXlB9/egR5yEAWJNbRg8A+CJePnrAeQgA1uSbRg8A+CJeOnrAeXgPAGvysfyWP+B0faz68tEj9uUJAGvx3Bz+wGm7tnrO6BH7EgCshTf/AWvwgtED9iUAWItrRw8A2MNqnlQKANbimaMHAOzhWaMH7EsAsBZPHT0AYA9PGz1gXwIAACYkAABgQgIAACYkAABgQgIAACYkAABgQgIAACYkAABgQgIAACYkAABgQgIAACYkAABgQgIAACYkAABgQgIAACYkAABgQgIAACYkAABgQgIAACYkAABgQhdHDziHm6rbR4/Y01ure0aPAIAnsqYAeF71vaNH7OnfJQAAOGF+BAAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAE7o4esA5vLu6MHoEAGyBJwAAMCEBAAATEgAAMCEBAAATEgAAMCEBAAATEgAAMCEBAAATEgAAMCEBAAATEgAAMCEBAAATEgAAMCEBAAATEgAAMCEBAAATEgAAMCEBAAATEgAAMCEBAAATEgAAy/qF6vdGj4AnIwAAlvWu6kXV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"
                ></image>
            </defs>
        </svg>
    );
}
