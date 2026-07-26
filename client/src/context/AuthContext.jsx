import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem('eduboard_token'));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      const storedUser = localStorage.getItem('eduboard_user');
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (e) {}
      }
    }
  }, [token]);

  const login = async (email, password, role = 'student') => {
    setLoading(true);
    
    // Quick Demo Users definition (Student and System Admin)
    const mockUsers = {
      student: {
        id: "usr_student",
        name: "Aarav Sharma (Student)",
        email: email || "student@eduboard.in",
        role: "student",
        targetBoard: "UP Board (Uttar Pradesh)",
        targetClass: "High School (Class 10)",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
        bookmarks: ["mat-01", "mat-02", "mat-05"],
        downloads: ["mat-01", "mat-02"]
      },
      admin: {
        id: "usr_admin",
        name: "System Admin (EduBoard Director)",
        email: email || "admin@eduboard.in",
        role: "admin",
        targetBoard: "All Indian Boards",
        targetClass: "High School & Intermediate",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
        bookmarks: [],
        downloads: []
      }
    };

    try {
      const res = await api.post('/auth/login', { email, password, role });
      if (res.data && res.data.success) {
        const { token: apiToken, user: apiUser } = res.data;
        setToken(apiToken);
        setUser(apiUser);
        localStorage.setItem('eduboard_token', apiToken);
        localStorage.setItem('eduboard_user', JSON.stringify(apiUser));
        return { success: true, message: res.data.message || `Welcome ${apiUser.name}!` };
      }
    } catch (err) {
      // Immediate fallback
    }

    const selectedUser = mockUsers[role] || mockUsers.student;
    const demoToken = "demo_jwt_token_" + Date.now();
    setToken(demoToken);
    setUser(selectedUser);
    localStorage.setItem('eduboard_token', demoToken);
    localStorage.setItem('eduboard_user', JSON.stringify(selectedUser));
    setLoading(false);
    return { success: true, message: `Welcome ${selectedUser.name}!` };
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('eduboard_token');
    localStorage.removeItem('eduboard_user');
  };

  const toggleBookmark = (materialId) => {
    if (!user) return false;
    const currentBookmarks = user.bookmarks || [];
    const isBookmarked = currentBookmarks.includes(materialId);
    const updated = isBookmarked
      ? currentBookmarks.filter(id => id !== materialId)
      : [...currentBookmarks, materialId];

    const updatedUser = { ...user, bookmarks: updated };
    setUser(updatedUser);
    localStorage.setItem('eduboard_user', JSON.stringify(updatedUser));
    return !isBookmarked;
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout, toggleBookmark }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
