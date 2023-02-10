import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
// ---------------firebaseConfig---------------------
const firebaseConfig = {
  apiKey: "AIzaSyCIiQNscpjM2Ii5rmzk98i9MhqT79H2Zzo",
  authDomain: "dewa-learn-react-ztm.firebaseapp.com",
  projectId: "dewa-learn-react-ztm",
  storageBucket: "dewa-learn-react-ztm.appspot.com",
  messagingSenderId: "383517192896",
  appId: "1:383517192896:web:757c82a31522563af53325",
};
// Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
//
//--------------database fire store------------
export const db = getFirestore();
// ---------crate user and save to firebase------------------------------------------------
export const create_UserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "user", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createDate = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createDate,
        ...additionalInformation,
      });
    } catch (err) {
      console.log("error creaate user ", err);
    }
  }
  return userDocRef;
};
//----------create new product to firestore--------
export const create_ProductDocumentToFirebase = async (AllProduct) => {
  if (!AllProduct) return;
  const productDocRef = doc(db, "Product", AllProduct.uid);
  const userSnapShot = await getDoc(productDocRef);
  if (!userSnapShot.exists()) {
    const { name, imageUrl, price } = AllProduct;
    try {
      await setDoc(productDocRef, {
        name,
        imageUrl,
        price,
      });
    } catch (err) {
      console.log("error creaate user ", err);
    }
  }
  return productDocRef;
};
//----------create new collection product to firestore--------
export const add_CollectionAndDocument = async (collectionke, obbjectToAdd) => {
  const collectiontDocRef = collection(db, collectionke);
  const batch = writeBatch(db);
  obbjectToAdd.forEach((object) => {
    const docRef = doc(collectiontDocRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("done");
};
//----------get new collection product to firestore--------
export const get_CatagoriesAndDocument = async () => {
  const collectionRef = collection(db, "Catagories");
  const q = query(collectionRef);
  const quertSnapShot = await getDocs(q);
  const catagoryMap = quertSnapShot.docs.reduce((acc, docSnapShot) => {
    const { title, items } = docSnapShot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return catagoryMap;
};

// --------------------auth----------------------------------------------------------------------
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
//----sign with google---------------------------------------------------------------
export const signIn_WithGooglePopup = () => signInWithPopup(auth, provider);
// ---
export const signIn_WithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

//------------create user with email--------------------------------------------------------------------------
export const create_AuthUserWithEmailAndPasswoed = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signIn_WithAuthEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
// ==
export const signOut_User = async () => await signOut(auth);
// ===
export const onAuth_StateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
