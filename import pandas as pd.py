import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error

# It's good practice to give your files descriptive names, e.g., 'earthquake_prediction.py'

# Load the dataset from a CSV file
try:
    df = pd.read_csv('earthquake_data.csv')
except FileNotFoundError:
    print("Error: 'earthquake_data.csv' not found.")
    print("Please make sure the CSV file is in the same directory as the script.")
    exit()

# Define features (X) and target (y)
X = df[['latitude', 'longitude', 'depth']]
y = df['magnitude']

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize and train the Linear Regression model
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Evaluate the model
mse = mean_squared_error(y_test, y_pred)
print(f"Mean Squared Error: {mse}")

# Example prediction for new data
new_earthquake_data = pd.DataFrame([[34.5, -118.5, 11.0]], columns=['latitude', 'longitude', 'depth'])
predicted_magnitude = model.predict(new_earthquake_data)
print(f"Predicted magnitude for new data: {predicted_magnitude[0]:.2f}")
