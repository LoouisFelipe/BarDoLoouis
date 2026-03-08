PROJECT_NUMBER=$(gcloud projects describe bardoluis --format='value(projectNumber)') && gcloud projects add-iam-policy-binding bardoluis --member="serviceAccount:service-${PROJECT_NUMBER}@gcp-sa-eventarc.iam.gserviceaccount.com" --role="roles/eventarc.serviceAgent"
firebase login
firebase init
npm install -g firebase-tools
firebase login
firebase init
firebase deploy --only hosting:bard0luis
firebase deploy --only hosting
mkdir public
cp -r src/* public/
firebase deploy --only hosting
ls -R public
# Exemplo se seus arquivos estiverem na raiz da pasta src que você subiu
cp -r src/* public/
firebase deploy --only hosting
git remote add origin https://github.com/LoouisFelipe/BarDoLoouis.git
git push -u origin BarDoLoouis
git remote add origin https://github.com/LoouisFelipe/BarDoLoouis.git
git init 
git commit -m "primeiro commit" 
git push -u origin BarDoLoouis
git branch -M BarDoLoouis 
git push -u origin BarDoLoouis
git remote add origin https://github.com/LoouisFelipe/BarDoLoouis.git
git branch -M main
git push -u origin main
git init
git add .
git commit -m "feat: inicialização do BarDoLoouis com Data Hub e Personas"
git config --global user.email "louisfelipecabral@gmail.com"
git config --global user.name "LoouisFelipe"
git commit -m "feat: inicialização do BarDoLoouis com Data Hub e Personas"
git push -u origin main
git remote add origin https://github.com/LoouisFelipe/BarDoLoouis.git
git branch -M BarDoLoouis
git push -u origin BarDoLoouis
echo "# BarDoLoouis" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M BarDoLoouis
git remote add origin https://github.com/LoouisFelipe/BarDoLoouis.git
git push -u origin BarDoLoouis
git commit -m "feat: inicialização do BarDoLoouis com Data Hub e Personas"
git add backend/ src/ GEMINI\ \(1\).md firebase.json firestore.rules public/
git commit -m "feat: inicialização do BarDoLoouis com Data Hub e Personas"
git add backend/ src/ GEMINI\ \(1\).md firebase.json firestore.rules public/
git commit -m "feat: implementação do Data Hub e Conselhos C-Level"
firebase login
firebase login --reauth # alternative, if necessary
firebase login --no-localhost # if running in a remote shell
firebase login --no-localhost
firebase login
firebase login --reauth # alternative, if necessary
firebase login --no-localhost # if running in a remote shell
cd $PROJECT_ROOT
firebase init genkit
firebase deploy
firebase experiments:enable webframeworks
firebase deploy
npx skills add firebase/agent-skills
gemini extensions install https://github.com/firebase/agent-skills
npm run dev
npm install
npm audit fix
npm run dev
npm install -g firebase-tools
git init
git add .
git commit -m "feat: estrutura inicial BarDoLoouis com Data Hub"
git remote add origin https://github.com/LoouisFelipe/BarDoLoouis.git
git branch -M main
git push -u origin main
git rm -r --cached .cache/ .codeoss/
git add .
git commit -m "chore: removendo arquivos pesados e configurando gitignore"
git push -u origin main
npm install -g firebase-tools
firebase init hosting
firebase init hosting:github
git init -b main
echo "# BarDoLoouis" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M BarDoLoouis
git remote add origin https://github.com/LoouisFelipe/BarDoLoouis.git
git push -u origin BarDoLoouis
git rm -r --cached .cache/ .codeoss/
echo ".cache/" >> .gitignore
echo ".codeoss/" >> .gitignore
echo "node_modules/" >> .gitignore
echo "*.log" >> .gitignore
git add .
git remote add origin https://github.com/LoouisFelipe/BarDoLoouis.git
git branch -M BarDoLoouis
git push -u origin BarDoLoouis
npm install firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUkN5SbkkgCxqep9eauFVfSpiiKZKpUTs",
  authDomain: "bardoloouis.firebaseapp.com",
  projectId: "bardoloouis",
  storageBucket: "bardoloouis.firebasestorage.app",
  messagingSenderId: "768840741068",
  appId: "1:768840741068:web:9794bf85d72c387e391269",
  measurementId: "G-HWC5E4QPJ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase apphosting:backends:create --project bardoloouis
git rm -r --cached .cache/
echo ".cache/" >> .gitignore
echo ".codeoss/" >> .gitignore
git add .
git commit -m "chore: removendo arquivos pesados e liberando a branch main"
git push -u origin main
git remote add origin https://github.com/LoouisFelipe/BarDoLoouis.git
git push -u origin BarDoLoouis
gemini
gh repo clone LoouisFelipe/BarDoLoouis
gh auth login
git remote add origin https://github.com/LoouisFelipe/BarDoLoouis.git
git branch -M BarDoLoouis 
git push -u origin BarDoLoouis
git push --help
unminimize
man-db
npm install @radix-ui/react-slot @radix-ui/react-toast class-variance-authority clsx lucide-react tailwind-merge
ls -a
ls -la
git add .
git rm --cached .gemini/history/71ebb9c327aa516616d354d6b3c218da779edbd609a4234636809efa777d2124
-f to force removal
git rm -rf --cached .gemini/
git rm -rf --cached .codeoss/
echo ".gemini/" >> .gitignore
echo ".codeoss/" >> .gitignore
echo ".cache/" >> .gitignore
git add .
git commit -m "chore: removendo submódulos de IA e limpando histórico para deploy"
git push -u origin main
cat <<EOF > next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    allowedDevOrigins: [
      '8080-cs-531d356b-f642-4c37-be1c-a6e0c4506686.cs-us-east1-rtep.cloudshell.dev'
    ]
  }
};

export default nextConfig;
EOF

cat <<EOF > next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    allowedDevOrigins: [
      '8080-cs-531d356b-f642-4c37-be1c-a6e0c4506686.cs-us-east1-rtep.cloudshell.dev'
    ]
  }
};

export default nextConfig;
EOF

gemini extensions install https://github.com/firebase/agent-skills
gemini extensions install https://github.com/gemini-cli-extensions/firebase/
npm run dev
fuser -k 8080/tcp
npm run dev
npm run dev
cat <<EOF > next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Configurações básicas para o BarDoLoouis */
  reactStrictMode: true,
};

export default nextConfig;
EOF

sudo apt-get update
sudo apt-get install -y openjdk-21-jdk
sudo update-alternatives --config java
java -version
firebase emulators:start
gcloud config set project [bardoloouis]
gemini
git add .
gcloud projects list
$ gcloud config set account ACCOUNT
$ gcloud auth loginv
$ gcloud auth login
git commit -m "feat: upgrade Cockpit v3.0 PRO - Integração Financeira e IA"
git push origin main
npm install firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUkN5SbkkgCxqep9eauFVfSpiiKZKpUTs",
  authDomain: "bardoloouis.firebaseapp.com",
  projectId: "bardoloouis",
  storageBucket: "bardoloouis.firebasestorage.app",
  messagingSenderId: "768840741068",
  appId: "1:768840741068:web:9794bf85d72c387e391269",
  measurementId: "G-HWC5E4QPJ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { initializeApp } from "firebase/app";
import { initializeApp } from "firebase/app";
export declare function initializeServerApp(config?: FirebaseServerAppSettings): FirebaseServerApp;
npm install dotenv
# Limpa o cache do NPM (geralmente libera centenas de MB)
npm cache clean --force
rm -rf ~/.npm
# Limpa caches gerais de desenvolvimento
rm -rf ~/.cache
# Remove lixeiras ocultas se existirem
rm -rf ~/.local/share/Trash
du -sh .[^.]* * | sort -hr | head -n 10
rm -rf .next .gemini
ls -la /home/louisfelipecabral/.env
npm install dotenv
npm install -g npm@11.11.0
npm run dev
fuser -k 8080/tcp
npm run dev
npm install @radix-ui/react-accordion
npm install @radix-ui/react-dialog @radix-ui/react-popover @radix-ui/react-scroll-area @radix-ui/react-tabs @radix-ui/react-label @radix-ui/react-alert-dialog @radix-ui/react-tooltip
npm run dev
npx depcheck
npm install
npm run dev
firebase-basics
df -h 
du -h . | sort -rh | head -n 10
npm cache clean --force
gemini
Por favor, execute os seguintes comandos, um de cada vez:                                                                                                                                 
gemini
Por favor, execute os seguintes comandos, um de cada vez:                                                                                                                                 
npm cache clean
npm cache clean
gemini
npm cache clean --force
du -hs $(ls -A)
rm source.zip
rm -rf .npm
rm -rf .cache .codeoss .next
rm -rf node_modules
npm run dev
npm install tailwindcss-animate
npm run dev
npm install -D autoprefixer
