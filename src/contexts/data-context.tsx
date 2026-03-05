       if (paymentMethod === 'Fiado') balanceAdj += finalTotal;
          if (creditApplied > 0) balanceAdj += creditApplied;
          if (finalTotal < 0) balanceAdj += finalTotal;

          if (balanceAdj !== 0) {
            transaction.update(customerRef, { balance: increment(balanceAdj) });
          }
        }

        // 3. Registrar Saída de Prêmio se houver
        if (gamePayout && gamePayout.amount > 0) {
          const payoutRef = doc(collection(db, 'transactions'));
          transaction.set(payoutRef, {
            type: 'expense',
            total: gamePayout.amount,
            expenseCategory: 'Prêmios',
            description: `PRÊMIO: ${gamePayout.name} (${order.displayName})`,
            timestamp: saleDate || serverTimestamp(),
            status: 'paid'
          });
        }
      });
      toast({ title: 'Venda Finalizada', description: `R$ ${finalTotal.toFixed(2)} registrados.` });
    } catch (error) {
      console.error(error);
    }
  };

  const updateUserProfile = async (uid: string, data: any) => {
    if (!db) return;
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, { ...data, updatedAt: serverTimestamp() });
    toast({ title: 'Perfil Atualizado' });
  };

  const markExpenseAsPaid = async (id: string) => {
    if (!db) return;
    const ref = doc(db, 'transactions', id);
    await updateDoc(ref, { status: 'paid', timestamp: serverTimestamp() });
    toast({ title: 'Conta Liquidada' });
  };

  const savePurchase = async (supplierId: string, supplierName: string, items: PurchaseItem[], totalCost: number) => {
    if (!db) return;
    try {
      await runTransaction(db, async (transaction) => {
        const purchaseRef = doc(collection(db, 'purchases'));
        transaction.set(purchaseRef, {
          supplierId,
          supplierName,
          items,
          totalCost,
          createdAt: serverTimestamp()
        });

        const txRef = doc(collection(db, 'transactions'));
        transaction.set(txRef, {
          type: 'expense',
          total: totalCost,
          expenseCategory: 'Insumos',
          description: `Compra: ${supplierName}`,
          timestamp: serverTimestamp(),
          status: 'paid',
          items: items
        });

        for (const item of items) {
          const productRef = doc(db, 'products', item.productId);
          transaction.update(productRef, { stock: increment(item.quantity) });
        }
      });
      toast({ title: 'Compra Registrada', description: `Estoque abastecido via ${supplierName}.` });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProduct = async (id: string) => {
    if (!db) return;
    await deleteDoc(doc(db, 'products', id));
    toast({ title: 'Removido', description: 'Produto excluído.' });
  };

  const deleteCustomer = async (id: string) => {
    if (!db) return;
    await deleteDoc(doc(db, 'customers', id));
    toast({ title: 'Removido', description: 'Cliente excluído.' });
  };

  const deleteSupplier = async (id: string) => {
    if (!db) return;
    await deleteDoc(doc(db, 'suppliers', id));
    toast({ title: 'Removido', description: 'Fornecedor excluído.' });
  };

  const value = {
    products: productsData || [],
    customers: customersData || [],
    suppliers: suppliersData || [],
    gameModalities: gamesData || [],
    transactions: txsData || [],
    recurringExpenses: recData || [],
    loading,
    saveProduct,
    saveCustomer,
    saveSupplier,
    saveGameModality,
    addStock,
    receivePayment,
    finalizeOrder,
    updateUserProfile,
    markExpenseAsPaid,
    savePurchase,
    deleteProduct,
    deleteCustomer,
    deleteSupplier
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) throw new Error('useData must be used within a DataProvider');
  return context;
};
    if (customerId) {
          const customerRef = doc(db, 'customers', customerId);
          let balanceAdj = 0;
   