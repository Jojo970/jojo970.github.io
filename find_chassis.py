import pandas as pd


df_main = pd.read_csv('chassi.csv')

df_find = pd.read_csv('recno.csv')

n = 0

for x, y in df_find['recno'].iteritems():
    new_df = df_main[df_main['RECNO'].isin([y])]
    break
    
for x, y in df_find['recno'].iteritems():
    check = df_main['RECNO'].isin([y])
    if check.any() == True:
        to_append = df_main[df_main['RECNO'].isin([y])]
        new_df = new_df.append(to_append)
        
        
    else:
        n+=1
        new_df = new_df.append(pd.Series(), ignore_index = True)
        new_df.fillna(value = n, inplace =True)


new_df.columns

real_df = new_df[['RECNO', 'ChassisNo']]



with pd.ExcelWriter('yst_out.xlsx') as writer:
    real_df.to_excel(writer, sheet_name='Sheet 1')