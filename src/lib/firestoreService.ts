import { db } from "./firebase";
import { collection, addDoc, getDocs, serverTimestamp } from "firebase/firestore";
import { PROJECTS, PHOTO_STORIES, Project, PhotoStory } from "@/data/portfolioData";

export interface ContactInquiry {
  name: string;
  email: string;
  message: string;
  source?: string;
  createdAt?: any;
}

/**
 * Saves a new contact / partnership inquiry to Firestore 'inquiries' collection
 */
export async function submitContactInquiry(inquiry: {
  name: string;
  email: string;
  message: string;
}): Promise<{ success: boolean; id?: string; error?: string }> {
  try {
    const docRef = await addDoc(collection(db, "inquiries"), {
      ...inquiry,
      createdAt: serverTimestamp(),
      source: "personal_portfolio_web",
    });
    return { success: true, id: docRef.id };
  } catch (error: any) {
    console.warn("Firestore inquiry error (falling back):", error?.message || error);
    return { success: false, error: error?.message || "Failed to record inquiry" };
  }
}

/**
 * Retrieves projects from Firestore, falling back to static projects if unavailable
 */
export async function fetchProjects(): Promise<Project[]> {
  try {
    const querySnapshot = await getDocs(collection(db, "projects"));
    if (!querySnapshot.empty) {
      const fetched: Project[] = [];
      querySnapshot.forEach((doc) => {
        fetched.push({ id: doc.id, ...(doc.data() as any) });
      });
      return fetched;
    }
  } catch (error) {
    console.info("Using baseline project dataset.");
  }
  return PROJECTS;
}

/**
 * Retrieves photo stories from Firestore, falling back to static dataset if unavailable
 */
export async function fetchPhotoStories(): Promise<PhotoStory[]> {
  try {
    const querySnapshot = await getDocs(collection(db, "photoStories"));
    if (!querySnapshot.empty) {
      const fetched: PhotoStory[] = [];
      querySnapshot.forEach((doc) => {
        fetched.push({ id: doc.id, ...(doc.data() as any) });
      });
      return fetched;
    }
  } catch (error) {
    console.info("Using baseline photo stories dataset.");
  }
  return PHOTO_STORIES;
}
