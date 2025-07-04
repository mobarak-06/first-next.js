"use client";

import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const CREATE_POST = gql`
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;
const page = () => {
  const [form, setForm] = useState({ title: "", body: "" });

  const [createPost, { data, loading, error }] = useMutation(CREATE_POST);

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost({
      variables: {
        input: {
          title: form.title,
          body: form.body,
          userId: 1,
        },
      },
    });
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">📝 Create a Post</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border w-full p-2 rounded"
          required
        />
        <textarea
          placeholder="Body"
          value={form.body}
          onChange={(e) => setForm({ ...form, body: e.target.value })}
          className="border w-full p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>

      {loading && <p className="text-gray-500 mt-3">⏳ Submitting...</p>}
      {error && <p className="text-red-500 mt-3">❌ {error.message}</p>}
      {data && (
        <p className="text-green-600 mt-3">
          ✅ Post created! ID: {data.createPost.id}
        </p>
      )}
    </div>
  );
};

export default page;
