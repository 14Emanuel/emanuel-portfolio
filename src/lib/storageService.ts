import { storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";

/**
 * Uploads an image blob or buffer to Firebase Object Storage
 */
export async function uploadPortfolioImage(
  file: Blob | Uint8Array,
  path: string
): Promise<string> {
  const storageRef = ref(storage, `portfolio-media/${path}`);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
}

/**
 * Lists all portfolio media files in the Object Storage bucket
 */
export async function listPortfolioImages(): Promise<string[]> {
  const listRef = ref(storage, "portfolio-media");
  const res = await listAll(listRef);
  const urlPromises = res.items.map((itemRef) => getDownloadURL(itemRef));
  return Promise.all(urlPromises);
}
