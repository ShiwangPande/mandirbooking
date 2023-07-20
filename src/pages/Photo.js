const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const techquizLink = (id: string, width: number, height: number) =>
    `https://i.postimg.cc/${id}`;



const techquizPhotos = [
    { id: "QtH2MvXN/IMG-20230718-WA0005.webp", width: 780, height: 1080 },
    { id: "xdFZBgLw/IMG-20230718-WA0006.webp", width: 1080, height: 780 },
    { id: "8P821yxD/IMG-20230718-WA0007.webp", width: 780, height: 1080 },
    { id: "y6SqCqQv/IMG-20230718-WA0008.webp", width: 1080, height: 780 },
    { id: "9ffSxswP/IMG-20230718-WA0009.webp", width: 1080, height: 780 },
    { id: "bwp4nZzB/IMG-20230718-WA0010.webp", width: 780, height: 1080 },
    { id: "HnMFw5cf/IMG-20230718-WA0011.webp", width: 780, height: 1080 },
    { id: "gkvfrVPh/IMG-20230718-WA0012.webp", width: 780, height: 1080 },
    { id: "pLC4JPrX/IMG-20230718-WA0013.webp", width: 780, height: 1080 },
    { id: "wvyrzJV7/IMG-20230718-WA0014.webp", width: 780, height: 1080 },
    { id: "hjk5tjyM/IMG-20230718-WA0015.webp", width: 780, height: 1080 },
    { id: "vHdKR46Z/IMG-20230718-WA0016.webp", width: 780, height: 1080 },
    { id: "dtmxJJ8m/IMG-20230718-WA0017.webp", width: 780, height: 1080 },
    { id: "GmLS26K0/IMG-20230718-WA0018.webp", width: 1080, height: 780 },
    { id: "zGx2Rp2y/IMG-20230718-WA0019.webp", width: 780, height: 1080 },
    { id: "BZFzwTbz/IMG-20230718-WA0020.webp", width: 780, height: 1080 },
    { id: "90yNRhs2/IMG-20230718-WA0021.webp", width: 780, height: 1080 },
    { id: "DzmjQsRB/IMG-20230718-WA0022.webp", width: 1080, height: 780 },
    { id: "ZRdw2mbN/IMG-20230718-WA0023.webp", width: 1080, height: 780 },
    { id: "JhgTp0Lm/IMG-20230718-WA0024.webp", width: 780, height: 1080 },
    { id: "90HLjk0n/IMG-20230718-WA0025.webp", width: 1080, height: 780 },
    { id: "Vv9DsFbL/IMG-20230718-WA0029.webp", width: 1080, height: 780 },
    { id: "8kLybTnQ/IMG-20230718-WA0030.webp", width: 1080, height: 780 },
    { id: "m2w808sm/IMG-20230718-WA0031.webp", width: 1080, height: 780 },
    { id: "3J7tSzPy/IMG-20230718-WA0032.webp", width: 780, height: 1080 },
    { id: "fRRBZmWD/IMG-20230718-WA0033.webp", width: 1080, height: 780 },
    { id: "4x2w3ynt/IMG-20230718-WA0034.webp", width: 780, height: 1080 },
    { id: "g0wsLp67/IMG-20230718-WA0035.webp", width: 780, height: 1080 },
    { id: "7LpVgR3Z/IMG-20230718-WA0036.webp", width: 1080, height: 780 },
    { id: "cHwcTchM/IMG-20230718-WA0037.webp", width: 780, height: 1080 },
    { id: "nrxGWQw8/IMG-20230718-WA0038.webp", width: 1080, height: 780 },
    { id: "BbCBfQdj/IMG-20230718-WA0039.webp", width: 1080, height: 780 },
    { id: "qBcL3jzp/IMG-20230718-WA0040.webp", width: 780, height: 1080 },
    { id: "xT0PyMzM/IMG-20230718-WA0041.webp", width: 1080, height: 780 },
    { id: "65YfHqrS/IMG-20230718-WA0042.webp", width: 780, height: 1080 },
    { id: "2SyFgYT5/IMG-20230718-WA0043.webp", width: 1080, height: 780 },
    { id: "3xqCTqbF/IMG-20230718-WA0044.webp", width: 1080, height: 780 },
    { id: "6QGV5hkJ/IMG-20230718-WA0045.webp", width: 780, height: 1080 },
    { id: "Y9K64W74/IMG-20230718-WA0046.webp", width: 1080, height: 780 },
];

const photos = techquizPhotos.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        src: techquizLink(photo.id, width, height),
        width,
        height,
        images: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: techquizLink(photo.id, breakpoint, height),
                width: breakpoint,
                height,
            };
        }),
    };
});

export default photos;