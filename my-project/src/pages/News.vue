<template>
  <div class="container py-5">
    <h2 class="mb-4">Latest News</h2>

    <!-- Search Bar -->
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search news..."
      class="form-control mb-4"
    />

    <!-- Admin Add News Section -->
    <div v-if="isAdmin" class="mb-5 p-4 bg-light border rounded">
      <h4>Add News</h4>
      <input v-model="newTitle" placeholder="Title" class="form-control mb-2" />
      <input v-model="newCategory" placeholder="Category" class="form-control mb-2" />
      <textarea
        v-model="newContent"
        placeholder="Content (min 10 characters)"
        class="form-control mb-2"
        rows="3"
      ></textarea>
      <button class="btn btn-dark w-100 mb-2" @click="addNews">Add News</button>
      <button class="btn btn-outline-danger w-100 mb-2" @click="resetNews">Reset News to Default</button>
      <button class="btn btn-outline-secondary w-100" @click="logout">Logout (Admin)</button>
    </div>

    <!-- News List -->
    <div
      v-for="item in paginatedNews"
      :key="item.id"
      class="news-card mb-4 p-3 border rounded"
    >
      <h4>{{ item.title }}</h4>
      <p class="text-muted mb-1">{{ item.date }} | {{ item.category }}</p>
      <p>{{ item.content }}</p>
      <button
        v-if="isAdmin"
        class="btn btn-sm btn-outline-danger mt-2"
        @click="deleteNews(item.id)"
      >
        Delete
      </button>
    </div>

    <!-- Pagination -->
    <nav v-if="totalPages > 1" class="mt-4">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <button class="page-link" @click="prevPage">Previous</button>
        </li>
        <li
          class="page-item"
          v-for="page in totalPages"
          :key="page"
          :class="{ active: currentPage === page }"
        >
          <button class="page-link" @click="goToPage(page)">{{ page }}</button>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <button class="page-link" @click="nextPage">Next</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import newsData from '../data/news.json';

export default {
  name: 'NewsPage',
  data() {
    return {
      searchQuery: '',
      currentPage: 1,
      perPage: 2,
      allNews: newsData,
      loggedInUser: null,
      newTitle: '',
      newContent: '',
      newCategory: ''
    };
  },
  computed: {
    isAdmin() {
      return this.loggedInUser?.role === 'admin';
    },
    filteredNews() {
      const q = this.searchQuery.toLowerCase();
      return this.allNews.filter((item) =>
        item.title.toLowerCase().includes(q) ||
        item.content.toLowerCase().includes(q) ||
        item.date.includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    },
    paginatedNews() {
      const start = (this.currentPage - 1) * this.perPage;
      return this.filteredNews.slice(start, start + this.perPage);
    },
    totalPages() {
      return Math.ceil(this.filteredNews.length / this.perPage);
    }
  },
  methods: {
    goToPage(page) {
      this.currentPage = page;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    addNews() {
      if (!this.newTitle || !this.newContent || !this.newCategory) {
        alert('Please fill in all fields.');
        return;
      }

      if (this.newContent.length < 10) {
        alert('Content must be at least 10 characters long.');
        return;
      }

      const newArticle = {
        id: Date.now(),
        title: this.newTitle,
        content: this.newContent,
        category: this.newCategory,
        date: new Date().toLocaleDateString()
      };

      this.allNews.unshift(newArticle);
      localStorage.setItem('tempNews', JSON.stringify(this.allNews));

      this.newTitle = '';
      this.newContent = '';
      this.newCategory = '';
    },
    deleteNews(id) {
      if (confirm('Are you sure you want to delete this news item?')) {
        this.allNews = this.allNews.filter((item) => item.id !== id);
        localStorage.setItem('tempNews', JSON.stringify(this.allNews));
      }
    },
    resetNews() {
      if (confirm('This will remove all temporary changes and reload the default news. Continue?')) {
        localStorage.removeItem('tempNews');
        this.allNews = [...require('../data/news.json')];
        this.currentPage = 1;
      }
    },
    logout() {
      localStorage.removeItem('loggedInUser');
      this.loggedInUser = null;
      alert('You have been logged out.');
    }
  },
  mounted() {
    const user = localStorage.getItem('loggedInUser');
    if (user) this.loggedInUser = JSON.parse(user);

    const savedNews = JSON.parse(localStorage.getItem('tempNews'));
    if (savedNews) this.allNews = savedNews;
  }
};
</script>

<style scoped>
.news-card h4 {
  font-weight: bold;
}

.pagination .page-item.active .page-link {
  background-color: #000;
  color: #fff;
  border-color: #000;
}

.pagination .page-link {
  color: #000;
}

.pagination .page-link:hover {
  background-color: #000;
  color: #fff;
}
</style>
