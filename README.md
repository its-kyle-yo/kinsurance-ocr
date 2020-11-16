# kinsurance-ocr
A coding assessment for Kinsurance for the criteria located [here](https://drive.google.com/file/d/1l4F38Y3sapZYhEuQE7NbmYJZxqozwtE4/view?usp=sharing)

## Getting Started 
  1. Install all dependencies with `npm install` 
  2. Run `npm start --random=true`
  3. ??? 
  4. Profit ! 🎉
 
  *Note: TypeScript is a dev dependency for the project. If any errors are encountered please run `npm i -g typescript`*
 
  ### Options 
   `--file=path/to/file`: dictates a Node FS readable file to read entries from
   
   `--random=[true/false]`: If set to true will generate a random file consisting of 500 random entries named file.txt
## Notes
The project was made without an input file to work from and thusly generates a 500 line text file with randomized ASCII numbers to process

## Other commands
 `npm run dev`: runs `tsc --watch` to watch all files and let TypeScript actively tell you what you missed *in Real Time* 😱 magical
 
 `npm run build`: removes the build folder and rebuilds via TSC
 
 `npm run clean`: 🤯 destroys the `./build` folder and all its hopes and dreams (not really (but yes really for the ./build folder))

## Dependencies 
  * TypeScript@next
  * npm@7.0.8
  * node@15.2.0
  * @types/node
