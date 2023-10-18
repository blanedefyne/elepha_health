import { TextContent } from 'shared/api/textContent/types'
import axios from 'axios'

export const getText = async (title: string): Promise<TextContent | null> => {
  try {
    const res = await axios.get(
        process.env.EXPO_PUBLIC_API_URL + `texts?filters[title][$eq]=${title}`,
        {
          headers: {
            'Authorization': 'Bearer ' + process.env.EXPO_PUBLIC_API_TOKEN
          }
        }
    )

    if (res.status == 200 && res.data.data.length === 1) {
      const data = res.data.data[0].attributes;
      return { title: data.title, content: data.content };
    }

    return null;
  } catch (e) {
    return null;
  }
}