---
title: "How I Discovered Data Science: From Code to Questions"
description: "Why exploratory data analysis, statistics, and uncovering patterns in raw data made Data Science stand out as an exciting area of study."
pubDate: "2025-11-15"
category: "Data Science"
tags: ["data-science", "eda", "statistics", "pandas", "python"]
draft: false
author: "Syed Mohammad Hamzah"
---

When you study standard computer science, most introductory programming assignments deal with clean, perfectly predictable inputs. You are given an integer array, a specific string format, or an exact mathematical function, and your job is to return the exact expected output.

Real-world information rarely works that way. 

Real data is recorded by fallible human processes, messy sensor readings, or inconsistent web forms. It contains missing values, typos, duplicate entries, and unexpected outliers. 

When I first started learning about Data Science, what struck me was not an exotic deep learning algorithm, but the realization that **understanding data is an investigative process**. You use code and statistics to ask structured questions, interrogate assumptions, and extract honest signals from messy information.

---

## What Attracted Me to Data Science

There is a common misconception that Data Science is simply importing an automated model from a library, running a single `.fit()` command, and bragging about an accuracy score on LinkedIn.

As I began studying the discipline more deeply, I realized the core work is far more analytical and thoughtful:

1. **Question Formulation:** Before writing code, you have to define what you are actually trying to understand. What hypothesis are you testing? What does the data represent in the physical world?
2. **Exploratory Data Analysis (EDA):** Looking at distributions, summary statistics, quartiles, and correlations to understand the shape of the data.
3. **Data Quality and Hygiene:** Identifying missing values, evaluating whether missingness is random, detecting measurement anomalies, and ensuring variables are properly cast.
4. **Statistical Skepticism:** Understanding that two variables showing a high correlation does not mean one caused the other.

A simple pattern that demonstrates this exploratory mindset is performing a structured data quality audit before attempting any modeling:

```python
import pandas as pd

def check_data_quality(df):
    """
    Performs a baseline inspection of null values and data types
    across all columns in a pandas DataFrame.
    """
    summary = pd.DataFrame({
        'Data Type': df.dtypes,
        'Missing Count': df.isnull().sum(),
        'Missing Pct (%)': (df.isnull().sum() / len(df) * 100).round(2),
        'Unique Values': df.nunique(),
    })
    
    # Filter to show columns with missing values first
    return summary.sort_values(by='Missing Count', ascending=False)

# Example usage on sample tabular data
sample_data = pd.DataFrame({
    'student_id': [101, 102, 103, 104],
    'study_hours': [12.5, None, 15.0, 8.0],
    'exam_score': [85, 78, None, 65]
})

print(check_data_quality(sample_data))
```

This diagnostic step reminds you that code is only as reliable as the data feeding into it.

When I first started experimenting with tabular data in Pandas, inspecting real distributions was humbling. Seeing how quickly missing entries, mismatched datatypes, and outliers can skew basic descriptive statistics made me realize why exploratory analysis is so critical. Writing code to systematically clean data and verify basic assumptions changed how I look at software problems.

---

## The Core Tools I Began Learning

To practice Data Science systematically, I began familiarizing myself with the standard Python data stack:

- **NumPy:** For understanding multidimensional arrays, vector operations, and matrix operations that connect directly back to college Linear Algebra.
- **Pandas:** For tabular data manipulation, grouping, filtering, and merging datasets.
- **Matplotlib & Seaborn:** For diagnostic plotting—histograms, box plots, and scatter plots that make distributions intuitive to inspect.
- **Jupyter Notebooks:** For writing code in modular cells and keeping explanatory notes alongside intermediate visual outputs.

---

## The Principle of "Garbage In, Garbage Out"

The most important conceptual takeaway from my early data exploration was the timeless rule: **no algorithm can rescue fundamentally flawed data.**

If data collection is biased, if columns are improperly defined, or if critical confounding variables are missing, even the most advanced neural network will simply learn and amplify those errors.

This taught me intellectual humility. Data Science is not about rushing to run complex models; it is about treating data with respect, validating assumptions, and communicating honest findings clearly.
